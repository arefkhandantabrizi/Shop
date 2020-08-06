import React, { Component } from "react";
// import { connect } from "react-redux";
// import { selectSchool } from "../../store/school";
// import { bindActionCreators } from "redux";

class Select extends Component {
  state = {};

  // handleChange = ({ currentTarget: option }) => {
  //   // console.log(option);
  //   this.props.selectedSchool = option;
  //   this.props.schoolsSelected({
  //     selectedSchool: this.props.selectedSchool,
  //   });
  // };
  render() {
    const {
      divClass,
      labelClass,
      className,
      name,
      label,
      options,
      error,
      ...rest
    } = this.props;
    return (
      <div className={divClass}>
        {error && <div className="alert alert__danger">{error}</div>}
        {name === "schoolName" && (
          <select name={name} id={name} {...rest} className={className}>
            <option value="" disabled hidden>
              {label}
            </option>
            {options.map((option) => (
              <option
                required
                key={option.name}
                // onChange={this.handleChange}
                value={option.name}
              >
                {option.name}
              </option>
            ))}
          </select>
        )}
        {name === "schoolGrade" && (
          <select name={name} id={name} {...rest} className={className}>
            <option value="" disabled hidden>
              {label}
            </option>
            {options.map((option) => (
              <option required key={option._id} value={option.grade}>
                {option.grade.map((grade, index) => grade[index])}
              </option>
            ))}
          </select>
        )}
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      </div>
    );
  }
}

// export default Select;

// const Select = ({
//   divClass,
//   labelClass,
//   className,
//   name,
//   label,
//   options,
//   error,
//   ...rest
// }) => {
//   return (
//     <div className={divClass}>
//       {error && <div className="alert alert__danger">{error}</div>}
//       {name === "schoolName" && (
//         <select name={name} id={name} {...rest} className={className}>
//           <option value="" disabled hidden>
//             {label}
//           </option>
//           {options.map((option) => (
//             <option required key={option.name} value={option.name}>
//               {option.name}
//               {this.props.selectedSchool}={option.name}
//             </option>
//           ))}
//         </select>
//       )}
//       {name === "schoolGrade" && (
//         <select name={name} id={name} {...rest} className={className}>
//           <option value="" disabled hidden>
//             {label}
//           </option>
//           {options.map((option) => (
//             <option required key={option._id} value={option.grade}>
//               {option.grade.map((grade, index) => grade[index])}
//             </option>
//           ))}
//         </select>
//       )}
//       <label htmlFor={name} className={labelClass}>
//         {label}
//       </label>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     schools: state.entities.schools,
//     selectedSchool: state.entities.schools.selectedSchool,
//     loading: state.entities.schools.loading,
//   };
// };

// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators({ selectSchool }, dispatch);
// };

// export default connect(mapStateToProps, matchDispatchToProps)(Select);
export default Select;
