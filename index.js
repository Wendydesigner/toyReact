import { HiReact,Component } from './hiReact.js';

// function HiComponent(){
//     return (
//         <div class="c-component">I am HiComponent</div>
//     )
// }

class HiComponentMore {
    render() {
        return (
            <div class="c-component">
                <span class="c-component-slot">I am HiComponent {true}</span>
            </div>
        )
    }
}

const originDom = (
    <div class="c-title">
        <span>123</span>
        <span class="c-span">123</span>
        {/* <HiComponent></HiComponent> */}
        <HiComponentMore class="c-component-parent">
        <div class="c-component-inner">i am slot</div></HiComponentMore>
    </div>
)
HiReact.render(originDom, document.body);
console.log(originDom);
