import React, { useState } from "react";
import "./styles.scss";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Settings = () => {
  const [keys, setKeys] = useState<string[]>(["Key1"]);
  const [newKey, setNewKey] = useState("");

  const handleDeleteKey = (passedKey: string) => () => {
    setKeys(keys.filter((key) => passedKey !== key));
  };

  return (
    <div className="settings">
      <div className="api-keys-section">
        <div className="text-secton">
          <span className="section-header">Add new API keys</span>
          <span className="section-text">Modify your API keys here</span>
        </div>
        <div className="add-keys-container">
          <div className="add-key">
            <input
              type="text"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
            />
            <div
              className="add-key-button"
              onClick={() => setKeys((prevState) => [...prevState, newKey])}
            >
              add key
            </div>
          </div>
        </div>
      </div>
      <div className="keys-list-section">
        <div className="text-secton">
          <span className="section-header">Saved API keys</span>
          <span className="section-text">
            This is a list of your current API keys
          </span>
        </div>
        <div className="keys-list">
          {keys.map((key) => (
            <div className="key-item">
              <div className="key-value">{key}</div>
              <div onClick={handleDeleteKey(key)} className="delete-key-button">
                <DeleteOutlineOutlinedIcon fontSize="small"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
