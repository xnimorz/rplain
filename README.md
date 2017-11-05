# rplain

React-Component for rendering children.

На русском: https://github.com/xnimorz/rplain/blob/master/README_RU.md

## Install
```
npm install --save rplain
```
Or
```
yarn add rplain
```
## Usage

```javascript
import RPlain from 'rplain';

class MyComponent extends Component {
    render() {
        const {children} = this.props;
        return (
            <RPlain>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>    
                {children}
            </RPlain>
        );
    }
}
```
Or
```javascript
import RPlain from 'rplain';
// some code
<RPlain>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>    
</RPlain>
```
Also you can see example page: https://xnimorz.github.io/rplain/ with source code: https://github.com/xnimorz/rplain/blob/master/examples/example.js

## JavaScript modules support:

RPlain can work as CommonJS or AMD module. You can use this component with webpack. RPlain wrote in es5 js standart. 

In case you don't use any modules, RPlain can work with global object. But it's not recommended

## Why?

In React <=15 you have to use container. So we have to use such constructions in components:

```javascript
class MyComponent extends Component {
    render() {
        const {children, title} = this.props;

        return (
            <div>
                <div class='MyComponent-title'>{title}</div>
                <div class='MyComponent-a1'>First useful content item</div>
                <div class='MyComponent-a2'>Second useful content item</div>
                {children}
            </div>
        );
    }
}
```
With React 16 component's render method can return arrays, plain strings. 
Let's rewrite our example to array:
```javascript
class MyComponent extends Component {
    render() {
        const {children, title} = this.props;

        return [                    
            <div key='title' class='MyComponent-title'>{title}</div>,
            <div key='a1' class='MyComponent_a1'>First useful content item</div>,
            <div key='a2' class='MyComponent_a2'>Second useful content item</div>,
            children,
        ];
    }
}
```
When we would return array, we must use "key" attribute, put comma in each block end. But our content isn't array. So we can wrap our content with RPlain component:
```javascript
class MyComponent extends Component {
    render() {
        const {children, title} = this.props;

        return (
            <RPlain>
                <div class='MyComponent-title'>{title}</div>
                <div class='MyComponent-a1'>First useful content item</div>
                <div class='MyComponent-a2'>Second useful content item</div>
                {children}
            </RPlain>
        );            
    }
}
```
## Why you create separate package?

This component is usefull in several projects. And it's usefull to use this library as package. ¯\_(ツ)_/¯
