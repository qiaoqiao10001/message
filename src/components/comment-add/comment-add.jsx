import React from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends React.Component{


    //增加数据步骤，
    // 1，处理提交事件
    //     1） 获取表单数据
    // 2，app.jsx组件修改状态
    //
    // 3,传递函数
    //调用添加函数
     static propTypes = {
         addComment:PropTypes.func.isRequired
     }

    state = {
        username:'',
        content:''
    }

    handleSubmit = () => {
        //收集数据，封装成comment对象
         const comment = this.state

        // 更新状态
        this.props.addComment(comment)

        //清除输入数据
        this.setState({
            username:'',
            content:''
        })
    }

    //使用受控组件来收集表单数据
    handleNameChange = (event) => {
        const username = event.target.value
        this.setState({username})
    }

    handleContentChange = (event) => {
        const content = event.target.value
        this.setState({content})
    }


    render(){
        const {username,content} = this.state
        return (
            <div>
                <div className="col-md-4">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>用户名</label>
                            <input type="text" className="form-control" placeholder="用户名"
                                   value={username} onChange={this.handleNameChange}/>
                        </div>
                        <div className="form-group">
                            <label>评论内容</label>
                            <textarea className="form-control" rows="6" placeholder="评论内容"
    value={content} onChange={this.handleContentChange}/>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}