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
];

class SystemUsers extends Component {
  state = {
    SystemUsers: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/teams/`).then((res) => {
      const SystemUsers = res.data;
      //   this.setState({ SystemUsers });
      console.log(SystemUsers);
    });
  }

  render() {
    return <></>;
  }
}

export default SystemUsers;
