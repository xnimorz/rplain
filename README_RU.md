# rplain

Реакт-компонент для рендеринга children. 

RPlain представляет собой небольшой реакт компонент, который позволяет рендерить только своих детей. 

## Установка
```
npm install --save rplain
```
или
```
yarn add rplain
```
## Использование

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
или
```javascript
import RPlain from 'rplain';
// some code
<RPlain>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>    
</RPlain>
```

Также для большего количества примеров можно посмотреть на https://github.com/xnimorz/rplain/blob/master/examples/example.js

## Поддержка:

RPlain поддерживает как AMD, так и CommonJS модули. Также вы можете использовать либу при сборке приложения вебпаком. 
При необходимости, RPlain подключается глобально (window.RPlain).

## Зачем?

В React 16 появилась возможность рендерить из компонента массивы, строки данных. Раньше у таких структур должен был быть общий контейнер. 
Это приводило к тому, что мы в компонентах видели следующий код:

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
В 16-м React мы можем использовать массивы:
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
Но для того, чтобы вернуть массив, мы должны указывать ключ key, хотя контент, по сути, массивом не является, не забывать ставить на конце каждого элемента (о чем я периодически забываю). Поэтому, можно обернуть содержимое компонента в rplain, и не беспокоиться о ключах (key) и о запятых:
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

## Зачем для такой маленькой библиотеки отдельный пакет?

Такая библиотека нужна в нескольких проектах и куда как удобнее вынести ее в отдельное место.