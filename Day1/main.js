import {ToyReact, Component} from './toy-react/index.js';




// 对应笔记 2.2 2.3
class MyComponent extends Component {
    render() {
        return <div>
            Cool!
            {true}
            {this.children}
        </div>;
    }

    // 这部分代码兑每个组件都是一样，因此抽象出来放到Component当中
    
    // setAttribute(name, value) {
    //     this[name] = value;
    // }

    // mountTo(parent) {
    //     // render 放回的是JSX
    //     let vdom = this.render();
    //     vdom.mountTo(parent);
    // }

    

}


let a = <MyComponent name='a'>
    <span>haha</span>
    <span>haha</span>
</MyComponent>

ToyReact.render(a, document.body);