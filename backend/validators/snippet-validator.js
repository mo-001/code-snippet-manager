const validation={
    validateTitle:(title)=>{
        return title.match(/[A-z]/) && title.length > 0 ? title : false
    },
    validateDescription:(description)=>{
        return description.match(/[A-z]/) && description.length > 0 ? title : false
    },
    validateTags:(tags)=>{
        for(tag of tags){
            if(!tag.match()){
                return false
            }
        }
        return tags

    },
    validateType:(type)=>{
        return type.match() && type != "" ? type : false
    },
    validateCode:(code)=>{
        return code.match() && code != "" ? code : false
    }
}

module.exports=validation