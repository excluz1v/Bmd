export const objReplace = (stateProperty, PropAttr,actionType, changeValue) => {
    return stateProperty.map(e =>{
        if( e[PropAttr]===actionType){
            return {...e, ...changeValue}
        }
        return e
    })
}