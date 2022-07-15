exports.getFullDate = () => {
    const today = new Date();
    const options = {day: "numeric", month: "long" };
    return today.toLocaleDateString("en-US", options);
  }
  
exports.getDay = () => {
    const today = new Date();
    const options = { weekday: "long" };
    return today.toLocaleDateString("en-US", options);
  }

exports.getTime = () => {
  const d = new Date();
  const time = d.toLocaleTimeString();
  console.log(time);
}