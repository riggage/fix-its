// render the User component 3 times in FixIt1
// have to pass data (props)

const User = (props) => {
    return <h2>hello {props.name}</h2>
}

const FixIt1 = () => {
    return (
        <div>
            <User name="benjamin" />
            <User name="cristiano" />
            <User name="bruce" />
        </div>)
}

export default FixIt1