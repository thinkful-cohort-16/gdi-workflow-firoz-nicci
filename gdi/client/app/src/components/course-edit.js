import React from "react";
import "./course-edit.css";
import Nav from "./nav";
import Form from "./form";
import { Field, reduxForm, arrayPush, arrayMove } from "redux-form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { editCourse, selectCourse } from "../actions";

export class CourseEdit extends React.Component {
  onEditSubmit = values => {
    // values.dates = values.dates.split(",");
    this.props.dispatch(editCourse(values));
  };

  selectCourse() {
    let courseOptions = ["Intro to JS", "Intro to HTML"];
    let selectCourses = [];

    for (let i = 0; i < courseOptions.length; i++) {
      selectCourses.push(<option key={i}>{courseOptions[i]}</option>);
    }
    console.log(`adadd ${selectCourses}`);
    return selectCourses;
  }

  onSelect(e) {
    console.log("value here", e.target.value);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="course-edit">
          <form
            role="form"
            onSubmit={this.props.handleSubmit(values =>
              this.onEditSubmit(values)
            )}
          >
            <h1>Course Edit</h1>
            <div>
              <label htmlFor="course-name">Course Name:</label>
              <Field
                component="select"
                type="text"
                name="course"
                id="course-name"
                onChange={this.onSelect}
              >
                <option>Select One...</option>
                {this.selectCourse()}

                {/* <option value="5a4d0096c1e8fa67e1151049">
                  Intro to JavaScript (JS)
                </option>
                <option value="5a4d015ec1e8fa67e115108b">
                  Intro to HTML/CSS
                </option>
                <option value="5a4d0139c1e8fa67e115107b">
                  Intro Salesforce App Dev
                </option>
                <option value="5a4d0151c1e8fa67e1151087">Intro SQL</option> */}
              </Field>
            </div>

            {/* <div className="input-icon">
              <label htmlFor="cost">Cost:</label>
            </div> */}

            <div>
              <label htmlFor="class-coord">Coordinator Name:</label>
              <Field
                component="select"
                type="text"
                name="coordinator"
                id="coordinator-name"
              >
                <option>Select One...</option>
                <option value="5a4d0692c1e8fa67e115116c">Nicci</option>
                <option value="5a4d0692c1e8fa67e1151172">Marcy</option>
                <option value="5a4d0692c1e8fa67e1151174">Megan</option>
              </Field>
            </div>

            <div className="teacher-name">
              <label>Instructor Name:</label>
              <Field
                component="select"
                type="text"
                name="instructor"
                id="instructor-name"
              >
                <option>Select One...</option>
                <option value="5a4d0692c1e8fa67e115116e">Michelle</option>
                <option value="5a4d0692c1e8fa67e1151170">Angel</option>
                <option value="5a4d0692c1e8fa67e115117a">Solomon</option>
              </Field>
            </div>

            <div>
              <label htmlFor="ta-name">TA Name:</label>
              <Field component="select" type="text" name="tas" id="tas-name">
                <option>Select One...</option>
                <option value="5a4d0692c1e8fa67e1151176">Laura</option>
                <option value="5a4d0692c1e8fa67e1151178">Bernadette</option>
              </Field>
            </div>

            <div>
              <label htmlFor="venue-name">Venue Name:</label>
              <Field
                component="select"
                type="text"
                name="venue"
                id="venue-name"
              >
                <option>Select One...</option>
                <option value="5a4d0643c1e8fa67e1151156">Digital Crafts</option>
                <option value="5a4d0643c1e8fa67e1151158">
                  CareerBuilder-Norcross Office
                </option>
                <option value="5a4d0643c1e8fa67e115115a">
                  CareerBuilder-Atlanta Office
                </option>
                <option value="5a4d0643c1e8fa67e115115c">eHire</option>
              </Field>
            </div>
            <div>
              <label htmlFor="start-date">Course Dates:</label>
              <input type="text" id="start-date" />
            </div>

            <div>
              <div className="addtl-dates-div" />
            </div>

            <div className="course-detail-buttons">
              {/* <button>Make Live on MeetUp</button> */}
              <button className="edit-submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const courseEdit = reduxForm({
  form: "courseEdit"
})(CourseEdit);

export default courseEdit;
