
const Checkbox = item_location => {
    const item = item_location.item
    const name = Object.getOwnPropertyNames(item)
    return (
        <div className="label-holder">
            <input id={name} type="checkbox" className="location-checkbox"/>
            <label htmlFor={name}>
                {name}
            </label>
        </div>
    )
}

export default Checkbox;