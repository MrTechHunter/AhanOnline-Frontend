import React, { Component } from "react";
import axios from "axios";

const columns = [
  {
    title: "mainteamname",
    dataIndex: "mainteamname",
    key: "mainteamname",
  },
  {
    title: "systemuserid",
    dataIndex: "systemuserid",
    key: "systemuserid",
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
    title: "fullname",
    dataIndex: "fullname",
    key: "fullname",
  },
];

class SystemUsers extends Component {
  state = {
    SystemUsers: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/system-users/`).then((res) => {
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
