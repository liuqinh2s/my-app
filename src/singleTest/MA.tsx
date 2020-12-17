import React from 'react';

class MA extends React.Component<{}, {value: string, error: any}> {

  constructor(props:any){
    super(props)
    this.state = {
      value: '',
      error: null
    }
  }

  render(){
    return (
      <div className="MA">
        <input type="text" placeholder="股票代码"></input>
        <input type="text" placeholder="MA"></input>
        <button onClick={this.getMA.bind(this)}>计算</button>
        <span>{this.state.value}</span>
      </div>
    );
  }

  getMA(){
    fetch("http://localhost:8080/hello/1/liuqin", {method: 'GET', mode: 'cors',})
      .then(
        async (result) => {
          let data = await result.text()
          console.log(data)
          this.setState({
            value: data
          });
        },
        // 注意：需要在此处处理错误
        // 而不是使用 catch() 去捕获错误
        // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
        (error) => {
          this.setState({
            error
          });
        }
      )
    this.setState({value: 'hello world'})
  }
  
}

export default MA;
