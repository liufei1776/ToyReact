// 对应笔记2.2

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
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
    }

    appendChild(vchild) {
        this.children.push(vchild);
    }


    setAttribute(name, value) {
        this[name] = value;
    }

    mountTo(parent) {
        // render 放回的是JSX
        let vdom = this.render();
        vdom.mountTo(parent);
    }
}





// 重新改造
let ToyReact =  {
    // 解析组件或者JSX
    createElement(type, attributes, ...children) {
        console.log(children);
        
        let element;
        if(typeof type === 'string') {
            element = new ElementWrapper(type);
            console.log('Not a component')
        }
        else if(typeof type === 'function') {
            element = new type;
            console.log('A component');
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
        

        console.log(element);
        return element;
    },
    render(vdom, element) {
        vdom.mountTo(element);
    }
};


export {ToyReact, Component};