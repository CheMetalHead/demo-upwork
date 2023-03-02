import React from "react";
import "./styles.scss";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";

const Main = () => {
  return (
    <div className="main-page">
      <div className="company-profile-section">
        <div className="left-side">
          <span className="section-header">Company Profile</span>
          <span className="section-text">
            Update your copany photo and details here
          </span>
        </div>
        <div className="right-side">
          <span className="cancel-button">Cancel</span>
          <span className="save-button">Save</span>
        </div>
      </div>
      <div className="public-profile-section">
        <div className="left-side">
          <span className="section-header">Public Profile</span>
          <span className="section-text">
            This will be displayed on your profile
          </span>
        </div>
        <div className="right-side">
          <span className="app-name"> Untitled UI</span>
          <div className="link-section">
            <span className="link-field">untitledui.com/profile</span>
            <span className="link-name">untitled</span>
          </div>
        </div>
      </div>
      <div className="tagline">
        <div className="left-side">
          <div className="header">Tagline</div>
          <div className="text">A quick snapshot of your company</div>
        </div>
        <textarea className="text-field" cols="80" rows="10"></textarea>
      </div>
      <div className="logo-section">
        <div className="text-section">
          <span className="header">Company Logo</span>
          <span className="text">
            Update your company logo and than choose where you want it to
            display
          </span>
        </div>
        <span className="logo">Untitled UI</span>
        <div className="input-field">
          <div className="input-button">
            <BackupOutlinedIcon />
          </div>
          <span className="input-text">
            <strong>Click to upload</strong> or drag and drop <br />
            SVG, PNG, JPG or GIF.Max 800x400px
          </span>
        </div>
      </div>
      <div className="branding-section">
        <div className="left">
          <span className="header">Branding</span>
          <span className="text">Add your logo to reports and emails</span>
          <span className="examples">View examples</span>
        </div>
        <div className="right">
          <div className="checkbox-section">
            <input type="checkbox" />
            <div className="text-container">
              <span className="header">Reports</span>
              <span className="text">Include my logo in summary reports</span>
            </div>
          </div>
          <div className="checkbox-section">
            <input type="checkbox" className="checkbox" />
            <div className="text-container">
              <span className="header">Emails</span>
              <span className="text">Include my logo in customer emails</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
