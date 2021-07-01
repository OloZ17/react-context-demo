import React from "react";
import { object } from "prop-types";

const UserDetail = ({ activeUser }) => {
  if (activeUser.id === 0) {
    return <div>Sélectionner un utilisateur </div>;
  }

  return (
    <div>
      <h3>Détail de {activeUser.name}</h3>
      <ul>
        <li>Id : {activeUser.id}</li>
      </ul>
    </div>
  );
};

UserDetail.propTypes = {
  activeUser: object
};

export default UserDetail;