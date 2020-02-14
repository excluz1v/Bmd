import React, { useState } from "react";
import s from "./Profile.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Preloader from "../common/Preloader";
import { reduxForm, Field } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../Utilits/Validators/Validators";
import { Textarea } from "../common/formTypes";
import StatusWithHooks from "./ProfileWithHucs";
import ProfileReduxForm from "./ProfileDataForm";

let maxLength = maxLengthCreator(255);

let MessageForm = props => {
  return (
    <div className="row">
      <form className={s.form} onSubmit={props.handleSubmit}>
        <Field
          placeholder="enter your message"
          name="chat"
          component={Textarea}
          validate={[maxLength]}
          className={`${s.area}`}
        />
        <button className={`${s.btn}`} variant="primary">
          Add post
        </button>
      </form>
    </div>
  );
};
let PostDiv = props => {
  return <li>{props.message}</li>;
};
let MessageFormRedux = reduxForm({ form: "profilemessage" })(MessageForm);

const Profile = props => {
  let [editMode1, setEditMode] = useState(false);
  let Post = props.profile.WallPosts.map(el => (
    <PostDiv key={el} message={el.text} />
  ));

  if (!props.profile.profile) {
    return <Preloader />;
  }
  let addPostFunction = text => {
    props.AddPostThunk(text.chat);
  };
  let onSubmit = formData => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className="col-9">
      <div className="row container-fluid">
        <div className="col-4">
          <StatusWithHooks
            {...props}
            status={props.status}
            isOwner={props.isOwner}
          />
          {editMode1 ? (
            <ProfileReduxForm
              onSubmit={onSubmit}
              {...props}
              initialValues={props.profile.profile}
            />
          ) : (
            <ProfileData
              editMode1={editMode1}
              {...props}
              isAuth={props.isAuth}
              goToEditMode={() => {
                setEditMode(true);
              }}
            />
          )}
        </div>
        <div className={`col-5 `}>
          <div className={`${s.posts} row`}>
            <ul className={s.post}>{Post}</ul>
          </div>
          <div className="row">
            {" "}
            <MessageFormRedux onSubmit={addPostFunction} />
          </div>
        </div>
        <div className="col-3">
          Данный раздел в разработке. Планируется подключить web-socket для
          реальной переписки с людьми.
        </div>
      </div>
    </div>
  );
};

export let Contacts = ({ ContKey, ContValue }) => {
  return (
    <div>
      <b>{ContKey}</b>: {ContValue}
    </div>
  );
};

let ProfileData = props => {
  return (
    <div className="row container-fluid">
      <div className="col-12">
        <b>FullName :</b> {props.profile.profile.fullName}
      </div>
      <div className="col-12">
        <b>Looking for a job :</b>{" "}
        {props.profile.profile.lookingForAJob ? "yes" : "no"}
      </div>
      {props.profile.profile.lookingForAJob ? (
        <div className="col-12">
          <b>description :</b> {props.profile.profile.lookingForAJobDescription}
        </div>
      ) : (
        undefined
      )}
      <div className="col-12">
        <b>about me :</b> {props.profile.profile.aboutMe}
      </div>
      <div className="col-12">
        <b>Contacts :</b>{" "}
        {Object.keys(props.profile.profile.contacts).map(key => {
          return (
            <Contacts
              key={key}
              ContKey={key}
              ContValue={props.profile.profile.contacts[key]}
            />
          );
        })}
      </div>
      <div>
        <button onClick={props.goToEditMode}>Edit</button>
      </div>
    </div>
  );
};

export default Profile;
