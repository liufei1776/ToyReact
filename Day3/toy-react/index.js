class ElementWrapper {
    constructor(type) {
        this.type = type;
        this.props = Object.create(null);
        this.children = [];
        this.range = null;
    }

    setAttribute(name, value) {
    //     if(name.match(/^on([\w\W]+)$/)) {
    //         //console.log('Element Wrapper', RegExp.$1);

    //         // 注意，事件名要转换成小写
    //         // onClick -> Click -> click
    //         this.root.addEventListener(RegExp.$1.toLocaleLowerCase(), value);

    //         // 事件需要加到属性当中
    //         return;
    //     }


    //    // 处理 className 细节
    //    if(name == 'className') {
    //        name = 'class';
    //    }

    //     this.root.setAttribute(name, value);

        this.props[name] = value;
    }

    appendChild(vchild) {
        // let range = document.createRange();

        // // 确定 range 范围

        // // 如果已经有子元素了，range 就从 lastChild起
        // if(this.root.children.length) {  // 防止 lastChild 不存在 （为null）
        //     // 就是添加到 lastChild 后面
        //     range.setStartAfter(this.root.lastChild);
        //     range.setEndAfter(this.root.lastChild);
        // }
        // // 否则range就是第一子元素
        // else {
        //     range.setStart(this.root, 0);
        //     range.setEnd(this.root, 0);
        // }

        // vchild.mountTo(range);

        this.children.push(vchild);
    }

    // mountTo(parent) {
    //     parent.appendChild(this.root);
    // }

    mountTo(range) {
        this.range = range;
        range.deleteContents();
       
        let element = document.createElement(this.type);


        // 原来的 setAttribute 逻辑
        for(let name in this.props) {
            let value = this.props[name];

            // 如果属性是事件
            if(name.match(/^on([\w\W]+)$/)) {
                // 注意，事件名要转换成小写
                // onClick -> Click -> click
                element.addEventListener(RegExp.$1.toLocaleLowerCase(), value);
            }
            else {
                if(name == 'className') {
                    name = 'class';
                }
                element.setAttribute(name, value);
            }
        }

        // 原来 appendChild 逻辑
        for(let child of this.children) {
            let range = document.createRange();
            if(element.children.length) {  // 防止 lastChild 不存在 （为null）
                // 就是添加到 lastChild 后面
                range.setStartAfter(element.lastChild);
                range.setEndAfter(element.lastChild);
            }
            // 否则range就是第一子元素
            else {
                range.setStart(element, 0);
                range.setEnd(element, 0);
            }
            child.mountTo(range);
        }


        range.insertNode(element);
    }


    
    // 没有render方法， 因为它已经是一个真实DOM了
}

class TextWrapper {
    constructor(content) {
        this.textNode = document.createTextNode(content);
        this.type = '#text';
        this.children = [];
        this.props = Object.create(null);
        this.range = null;
    }

    mountTo(range) {
        this.range = range;
        range.deleteContents();
        range.insertNode(this.textNode);
    }
}


// 组件的一些常用方法都是一样的，因此提取出来
class Component {

    constructor() {
        this.children = [];
        // 创建一个“干净”的对象
        this.props = Object.create(null);

        this.range = null;

        this.vdom = null;
    }

    get type() {
        return this.constructor.name;
    }

    appendChild(vchild) {
        this.children.push(vchild);
    }


    setAttribute(name, value) {
        this.props[name] = value
        this[name] = value;
    }

    mountTo(range) {
        this.range = range;
        this.update();
    }

    update() {
        
        let vdom = this.render(); 
        if(this.vdom) {
            let isSameNode = (node1, node2) =>{

                // 类型不同
                if(node1.type != node2.type) {
                    return false;
                }

                // props 数量不同
                if(Object.keys(node1.props).length != Object.keys(node2.props).length) {
                    return false;
                }

                for(let name in node1.props) {
                    if(node1.props[name] !== node2.props[name]) {
                        return false;
                    }
                }

                return true;
            }

            let isSameTree = (node1, node2) => {

                // 根节点是否相同
                if(isSameNode(node1, node2)) {
                    return false;
                }

                // 子元素数量是否相同
                if(node1.children.length != node2.children.length) {
                    return false;
                }

                for(let i=0; i<node1.children.length; i++) {
                    // 递归
                    if(!isSameTree(node1.children[i]), node2.children[i]) {
                        return false;
                    }
                } 
                
                return true;
            }

            let replace = (newTree, oldTree) => {
                if(isSameTree(newTree, oldTree)) {
                    return;
                }

                // 在tree不同的情况下
                if(!isSameNode(newTree, oldTree)) {
                    // 如果根节点不同，直接替换整个树
                    newTree.mountTo(oldTree.range);
                }
                else {
                    // 如果根节点相同，一层层替换
                    for(let i=0; i<newTree.children.length; i++) {
                        replace(newTree.children[i], oldTree.children[i]);
                    }
                }
            }
            replace(vdom, this.vdom);
        }
        else {
            vdom.mountTo(this.range);
        }
        
        this.vdom = vdom;
    }


    // 模拟 React 的 setState 功能 
    setState(state) {
        if(!this.state && state) {
            this.state = {};
        }

        // 这里对深拷贝应该不那么严格？
        Object.assign(this.state, state);
        console.log(this.state);

        this.update();
    } 
}





let ToyReact =  {
    // 解析组件或者JSX
    createElement(type, attributes, ...children) {
        //console.log(children);
        
        let element;
        if(typeof type === 'string') {
            element = new ElementWrapper(type);
            //console.log('Not a component')
        }
        else if(typeof type === 'function') {
            element = new type;
            //console.log('A component');
        }

        for(let key in attributes) {
            element.setAttribute(key, attributes[key])
        }

        let insertChildren = children => {
            for(let child of children) {
                if(Array.isArray(child)) {
                    insertChildren(child);
                }
                else {
                    if(child === null || child === undefined) 
                        child = "";

                    // 对于不是上面三种类型的，强制转换成String
                    if(!(child instanceof Component) &&
                       !(child instanceof ElementWrapper) &&
                       !(child instanceof TextWrapper) ) {   
                        child = String(child);
                    }

                    if(typeof child === 'string') {
                        child = new TextWrapper(child);
                    }
                    element.appendChild(child);
                }
            }
        }
        insertChildren(children);
        

        //console.log(element);
        return element;
    },

    // render(vdom, element) {
    //     vdom.mountTo(element);
    // }

    render(vdom, element) {
        let range = document.createRange();

        // 确定 Range 的 范围

        if(element.children.length) {  // 防止 lastChild 不存在 （为null）
            // 就是添加到 lastChild 后面:  lastChild + (start,end)
            range.setStartAfter(element.lastChild);
            range.setEndAfter(element.lastChild);
            
        }
        else {
            range.setStart(element, 0);
            range.setEnd(element, 0);
        }

        // 将 vdom 加到 range 中
        vdom.mountTo(range);
    }
};


export {ToyReact, Component};