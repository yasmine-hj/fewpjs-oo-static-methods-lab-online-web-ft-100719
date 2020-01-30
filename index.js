class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleized = []
    let split = string.split(" ")
    for (const word of split){
      if (split.indexOf(word) == 0){
        titleized.push(this.capitalize(word))
      } else {
        exceptions.includes(word) ? titleized.push(word) : titleized.push(this.capitalize(word))      
      }
    }
    return titleized.join(" ")
  } 
}