import React from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         comments:[
    //             {username:'tom',content:'too diff'},
    //             {username:'jack',content:'too easy'}
    //         ]
    //     }
    // }
    //给组件对象添加state属性
    state = {
            comments:[
                {username:'tom',content:'too diff'},
                {username:'jack',content:'too easy'}
            ]
    }
    //添加评论
    addComment = (comment) => {
        //险得到状态
        const {comments} = this.state
        //修改状态内容
        comments.unshift(comment)
        //更新状态
        this.setState({comments})
    }
    //删除评论
    deleteComment = (index) => {
        //险得到状态
        const {comments} = this.state
        //修改状态内容
        comments.splice(index,1)
        //更新状态
        this.setState({comments})
    }

    render(){
        //得到这个状态值，通过props传递给item
        const {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        )
    }
}