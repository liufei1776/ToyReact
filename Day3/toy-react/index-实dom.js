class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        if(name.match(/^on([\w\W]+)$/)) {
            //console.log('Element Wrapper', RegExp.$1);

            // 注意，事件名要转换成小写
            // onClick -> Click -> click
            this.root.addEventListener(RegExp.$1.toLocaleLowerCase(), value);

            // 事件需要加到属性当中
            return;
        }


       // 处理 className 细节
       if(name == 'className') {
           name = 'class';
       }

        this.root.setAttribute(name, value);
    }

    // appendChild(vchild) {
    //     vchild.mountTo(this.root);
    // }

    appendChild(vchild) {
        let range = document.createRange();

        // 确定 range 范围

        // 如果已经有子元素了，range 就从 lastChild起
        if(this.root.children.length) {  // 防止 lastChild 不存在 （为null）
            // 就是添加到 lastChild 后面
            range.setStartAfter(this.root.lastChild);
            range.setEndAfter(this.root.lastChild);
        }
        // 否则range就是第一子元素
        else {
            range.setStart(this.root, 0);
            range.setEnd(this.root, 0);
        }

        vchild.mountTo(range);
    }

    // mountTo(parent) {
    //     parent.appendChild(this.root);
    // }

    mountTo(range) {
        range.deleteContents();
        // 在range内部永远插入节点
        range.insertNode(this.root);
    }


    
    // 没有render方法， 因为它已经是一个真实DOM了
}

class TextWrapper {
    constructor(content) {
        this.textNode = document.createTextNode(content);
    }

    mountTo(range) {
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
    }

    appendChild(vchild) {
        this.children.push(vchild);
    }


    setAttribute(name, value) {
        this.props[name] = value
        this[name] = value;
    }


    // 将 moutTo 拆解位 mountTo 和 update

    // mountTo(parent) {
    //     // render 返回的 的是JSX
    //     let vdom = this.render();  // JSX解析之后，就变成了实DOM
    //     vdom.mountTo(parent);
    // }

    mountTo(range) {
        this.range = range;
        this.update();
    }

    update() {
        let placeholder = document.createComment('placeholder');
        let range = document.createRange();

        range.setStart(this.range.endContainer, this.range.endOffset);
        range.setEnd(this.range.endContainer, this.range.endOffset);
        range.insertNode(placeholder);

        // 先清理 -》 具备更新的能力了
        this.range.deleteContents();

        // render再次获得JSX，并解析成实DOM，即ElementWrapper
        let vdom = this.render();  
        vdom.mountTo(this.range);

        // placeholder.parentNode.removeChild(placeholder);
    }


    // 模拟 React 的 setState 功能 
    setState(state) {
        // Winter 的代码
        // function merge(oldState, newState) {
        //     for(let key in newState) {
        //         if(typeof newState[key] === 'object') {
        //             if(typeof oldState[p] !== 'object') {
        //                 oldState[p] = {};
        //             }
        //             merge(oldState[p], newState[p]);
        //         }
        //         else {
        //             oldState[p] = newState[p];
        //         }
        //     }
        // }

        // // 如果this.state 没有定义？
        // if(!this.state && state) {
        //     this.state = {};
        // }

        // merge(this.state, state);


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