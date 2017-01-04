/**
 * Created by Neil on 2017/1/3.
 */
const React = require('react');
const ReactDOM = require('react-dom');
require('../css/main.scss');

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                      src={props.author.avatarUrl}
//                      alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

// const foo = (<p>Hello world!</p>);
// function App() {
//     return (
//         <div>
//             <Fuck name="asd"/>
//             <Fuck name="ning"/>
//             <Fuck name="wang"/>
//         </div>
//     );
// }
// function Fuck(props) {
//     return (<div>Fuck {props.name}</div>);
// }

/*Reusable components*/
// function UserInfo(props) {
//     return (
//         <div className="user-info">
//             <img src={props.author.imgUrl} alt={props.author.name}/>
//             <div>{props.author.name}</div>
//         </div>
//     );
// }
// function CommentText(props) {
//     return (<div className="comment-text">{props.text}</div>)
// }
//
// function CommentDate(props) {
//     return (<div className="comment-date">{props.date}</div>);
// }
//
// function Comment(props) {
//     return (
//         <div>
//             <UserInfo author={props.comment.author}/>
//             <CommentText text={props.comment.text}/>
//             <CommentDate date={props.comment.date}/>
//         </div>
//     );
// }
// let comment = {
//     author: {
//         name: 'Ning',
//         imgUrl: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
//     },
//     text: 'hahaha really cool',
//     date: new Date().toLocaleTimeString(),
// };
// ReactDOM.render(
//     <Comment comment={comment}/>,
//     document.querySelector('#root')
// );

/*State and LifeCycles*/
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {time: new Date()};
//     }
//
//     render() {
//         return (
//             <div className="clock">
//                 <p className="title">Hello!</p>
//                 <p className="time">It's {this.state.time.toLocaleTimeString()} now!</p>
//                 <Anodate time={this.state.time}/>
//             </div>
//         );
//     }
//
//     componentDidMount() {
//         this.timer = setInterval(() => this.tick(), 1000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }
//
//     tick() {
//         this.setState((prevState, props) => {
//             return {time: new Date()};
//         });
//     }
//
// }
//
// function Anodate(props) {
//     return (
//         <div>
//             <p>Another time is: {props.time.toString()}</p>
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <Clock/>,
//     document.querySelector('#root'));

/*Event handler*/
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {toggle: false};
//         this.toggle = this.toggle.bind(this);
//     }
//
//     render() {
//         return (<button onClick={this.toggle}>{this.state.toggle ? 'On' : 'Off'}</button>);
//     }
//
//     toggle() {
//         this.setState(function (prevState, props) {
//             return prevState.toggle ? {toggle: false} : {toggle: true};
//         });
//     }
// }
// ReactDOM.render(<Toggle/>, document.querySelector('#root'));

/*Conditional Rendering*/
// function Greeting(props) {
//     if (props.isLogin) {
//         return (
//             <h1>Welcome</h1>
//         );
//     } else {
//         return (
//             <h1>Please Login</h1>
//         );
//     }
// }
//
// function Warning(props) {
//     if (props.doWarn) {
//         return(
//             <p>Warning!!</p>
//         );
//     }else {
//         return null;
//     }
//
// }
//
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLogin: false
//         };
//         this.logControl = this.logControl.bind(this);
//     }
//
//     render() {
//         return (
//             <div>
//                 <Greeting isLogin={this.state.isLogin}/>
//                 <button onClick={this.logControl}>{
//                     this.state.isLogin ? 'logout' : 'login'
//                 }</button>
//                 <Warning doWarn={this.state.isLogin}/>
//             </div>
//         );
//     }
//
//     logControl() {
//         this.setState((prevSate, props) => {
//             if (prevSate.isLogin) {
//                 return {isLogin: false};
//             } else {
//                 return {isLogin: true};
//             }
//         });
//     }
// }
// ReactDOM.render(<LoginControl/>, document.querySelector('#root'));

/*List and keys*/
// const names = ['ning', 'wang', 'ming', 'wei'];
// // const eles = names.map(function (item, index, array) {
// //     return (<li>{item}</li>);
// // });
//
// function ListItem(props) {
//     return (<li>{props.item}</li>);
// }
//
// function Elements(props) {
//     let elements = props.arr.map((item, index) => {
//         return (<ListItem key={index} item={item}/>)
//     });
//     return (
//         <ul>
//             {elements}
//         </ul>
//     );
// }
// ReactDOM.render(<Elements arr={names}/>, document.querySelector('#root'));

/*forms*/
// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: '', text: '', select: 'apple'};
//         this.onFormSubmit = this.onFormSubmit.bind(this);
//         this.onInputChange = this.onInputChange.bind(this);
//         this.onTextareaChange = this.onTextareaChange.bind(this);
//         this.onSelectChange = this.onSelectChange.bind(this);
//     }
//
//     render() {
//         return (
//             <form action="#" onSubmit={this.onFormSubmit}>
//                 <input type="text" value={this.state.value} onChange={this.onInputChange}/>
//                 <input type="submit" value="submit"/>
//                 <textarea name="textarea" value={this.state.text} onChange={this.onTextareaChange} cols="30" rows="10"/>
//                 <select name="select" value={this.state.select} onChange={this.onSelectChange}>
//                     <option value="apple">apple</option>
//                     <option value="melon">melon</option>
//                     <option value="banana">banana</option>
//                     <option value="what">what</option>
//                 </select>
//             </form>
//         );
//     }
//
//     onSelectChange(e){
//         this.setState({select:e.target.value});
//     }
//
//     onTextareaChange(e) {
//         this.setState({text: e.target.value});
//     }
//
//     onInputChange(e) {
//         this.setState({value: e.target.value.toUpperCase()});
//     }
//
//     onFormSubmit(e) {
//         e.preventDefault();
//         console.log(`new value is: ${this.state.value.toUpperCase()}`);
//     }
// }
// ReactDOM.render(<Form/>, document.querySelector('#root'));

/*Lifting State Up*/
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    } else {
        return <p>The water would not boil.</p>;
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TempretaureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <fieldset>
                <legend>Enter the temperature in {scaleNames[this.props.scale]}:</legend>
                <input type="text" value={this.props.value} onChange={this.props.onChange}/>
            </fieldset>
        );
    }

    onInputChange(e) {
        this.setState({input: e.target.value});
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cValue: '', fValue: ''};
        this.on_c_Change = this.on_c_Change.bind(this);
        this.on_f_Change = this.on_f_Change.bind(this);
    }

    render() {
        return (
            <div>
                <TempretaureInput scale="c" value={this.state.cValue} onChange={this.on_c_Change}/>
                <TempretaureInput scale="f" value={this.state.fValue} onChange={this.on_f_Change}/>
                <BoilingVerdict celsius={this.state.cValue}/>
            </div>
        );
    }

    on_c_Change(e){
        this.setState({
            cValue:e.target.value,
            fValue:tryConvert(e.target.value,toFahrenheit),
        });
    }
    on_f_Change(e){
        this.setState({
            fValue:e.target.value,
            cValue:tryConvert(e.target.value,toCelsius),
        });
    }
}

ReactDOM.render(<Calculator/>, document.querySelector('#root'));