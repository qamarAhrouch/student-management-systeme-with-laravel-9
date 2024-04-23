export const AddReqtAction = (request) => {
    return { type: 'ADD_REQUEST', payload: request };
  }
  
  export const UpdateReqAction = (newReq) => {
    return { type: 'UPDATE_REQ', payload: newReq };
  }
  
  export const DeleteReqAction = (id) => {
    return { type: 'DELETE_REQ', payload: id }
  }
  
export const AcceptReqAction = (id) => {
  return { type: 'ACCEPT_REQ', payload: id };
};

export const RefuseReqAction = (id) => {
  return { type: 'REFUSE_REQ', payload: id };
};

  
  export const updateMissionAction = ( newMission) => {
    return { type: 'UPDATE_MISSION', payload:newMission  }
  }