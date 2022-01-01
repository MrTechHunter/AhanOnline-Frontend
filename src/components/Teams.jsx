import React, { Component } from "react";
import axios from "axios";

const columns = [
  {
    title: "teamid",
    dataIndex: "teamid",
    key: "teamid",
  },
  {
    title: "organizationid",
    dataIndex: "organizationid",
    key: "organizationid",
  },
  {
    title: "businessunitid",
    dataIndex: "businessunitid",
    key: "businessunitid",
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "createdon",
    dataIndex: "createdon",
    key: "createdon",
  },
  {
    title: "modifiedon",
    dataIndex: "modifiedon",
    key: "modifiedon",
  },
  {
    title: "createdby",
    dataIndex: "createdby",
    key: "createdby",
  },
  {
    title: "modifiedby",
    dataIndex: "modifiedby",
    key: "modifiedby",
  },
  {
    title: "isdefault",
    dataIndex: "isdefault",
    key: "isdefault",
  },
  {
    title: "administratorid",
    dataIndex: "administratorid",
    key: "administratorid",
  },
];

class Teams extends Component {
  state = {
    Teams: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/teams/`).then((res) => {
      const Teams = res.data;
      console.log(Teams);
    });
  }

  render() {
    return <></>;
  }
}

export default Teams;
