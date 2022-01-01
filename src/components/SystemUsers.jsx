import React, { Component } from "react";
import axios from "axios";

import { Table } from "antd";

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
  constructor() {
    super();
    this.state = {
      SystemUsers: [],
    };
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/system-users/`).then((res) => {
      const SystemUsers = res.data;
      // this.setState({ SystemUsers: SystemUsers });
      console.log(SystemUsers);
    });
  }

  render() {
    return <>{/* <Table columns={columns} dataSource={SystemUsers} /> */}</>;
  }
}

export default SystemUsers;
