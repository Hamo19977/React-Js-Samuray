import "./Styles/Content.css"

function Content() {
    return (
        <div className={'content'}>
            <div><img width={50} height={50} src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/></div>
            <div>ava + description</div>
            <div>My Posts</div>
            <div>New Post</div>
            <div>Post One</div>
            <div>Post two</div>
        </div>
    )
}

export default Content