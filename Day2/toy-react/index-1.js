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

    appendChild(vchild) {
        vchild.mountTo(this.root);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }

    
    // 没有render方法， 因为它已经是一个真实DOM了
}

class TextWrapper {
    constructor(content) {
        this.textNode = document.createTextNode(content);
    }

    mountTo(parent) {
        parent.appendChild(this.textNode);
    }
}


// 组件的一些常用方法都是一样的，因此提取出来
class Component {

    constructor() {
        this.children = [];
        // 创建一个“干净”的对象
        this.props = Object.create(null);
    }

    appendChild(vchild) {
        this.children.push(vchild);
    }


    setAttribute(name, value) {
        this.props[name] = value
        this[name] = value;
    }

    mountTo(parent) {
        // render 返回的 的是JSX
        let vdom = this.render();  // JSX解析之后，就变成了实DOM
        vdom.mountTo(parent);
    }


    // 模拟 React 的 setState 功能 
    setState(state) {
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
    render(vdom, element) {
        vdom.mountTo(element);
    }
};


export {ToyReact, Component};