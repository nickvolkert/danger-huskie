import React from "react";
import { Link } from "react-router-dom";

// const Btn = props => (
//   <div className="btn-wrapper">
//     <a href={props.link} className="{props.btnClass} btn">{props.btntext}</a>
//   </div>
// );

// export default Btn;
class Btn extends React.Component {

  render() {
    const { 
      btnlink,
      variant,
      content
    } = this.props;
    
    return (
      <Link to={btnlink} className={variant}>{content}</Link>
    )
  }
}
export default Btn;