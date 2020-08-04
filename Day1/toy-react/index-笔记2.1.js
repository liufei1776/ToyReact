
// 对应 笔记2.1
export default {
    createElement(type, attributes, ...children) {
        console.log(arguments);

        let el = document.createElement(type);
        for(let key in attributes) {
            
            // !Wrong: el[key] = attributes[key]

            el.setAttribute(key, attributes[key])
        }

        for(let child of children) {
            if(typeof child === 'string') {
                child = document.createTextNode(child);
            }
            el.appendChild(child);
        }

        return el;
    },
    render(vdom, element) {
        element.appendChild(vdom);
    }
};
