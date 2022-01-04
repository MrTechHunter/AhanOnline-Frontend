import React, { useState } from "react";

import { SaveOutlined } from "@ant-design/icons";

import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import axios from "axios";

function AddSystemUser() {
  const [mainteamname, set_mainteamname] = useState("");
  const [systemuserid, set_systemuserid] = useState("");
  const [organizationid, set_organizationid] = useState("");
  const [businessunitid, set_businessunitid] = useState("");
  const [parentsystemuserid, set_parentsystemuserid] = useState("");
  const [firstname, set_firstname] = useState("");
  const [lastname, set_lastname] = useState("");
  const [fullname, set_fullname] = useState("");
  const [internalemailaddress, set_internalemailaddress] = useState("");
  const [mobilephone, set_mobilephone] = useState("");
  const [domainname, set_domainname] = useState("");
  const [createdon, set_createdon] = useState("");
  const [modifiedon, set_modifiedon] = useState("");
  const [createdby, set_createdby] = useState("");
  const [modifiedby, set_modifiedby] = useState("");
  const [isdisabled, set_isdisabled] = useState("");
  const [skills, set_skills] = useState("");
  const [calendarid, set_calendarid] = useState("");
  const [activedirectoryguid, set_activedirectoryguid] = useState("");
  const [invitestatuscode, set_invitestatuscode] = useState("");
  const [isactivedirectoryuser, set_isactivedirectoryuser] = useState("");
  const [queueid, set_queueid] = useState("");
  const [transactioncurrencyid, set_transactioncurrencyid] = useState("");
  const [defaultmailbox, set_defaultmailbox] = useState("");
  const [userlicensetype, set_userlicensetype] = useState("");
  const [islicensed, set_islicensed] = useState("");
  const [positionid, set_positionid] = useState("");
  const [positionidname, set_positionidname] = useState("");
  const [test, set_test] = useState("");
  const [testdate, set_testdate] = useState("");
  const [teststate, set_teststate] = useState("");
  const [subsidiaryid, set_subsidiaryid] = useState("");
  const [notificationchatid, set_notificationchatid] = useState("");
  const [mainteam, set_mainteam] = useState("");
  const [currenttask, set_currenttask] = useState("");
  const [ext, set_ext] = useState("");
  const [shamsidatestartcollaboration, set_shamsidatestartcollaboration] =
    useState("");
  const [id, set_id] = useState("");
  const [cats, set_cats] = useState("");
  const [onsite, set_onsite] = useState("");
  const [generateseller, set_generateseller] = useState("");
  const [happycustomerscount, set_happycustomerscount] = useState("");
  const [unhappycustomerscount, set_unhappycustomerscount] = useState("");
  const [mainproject, set_mainproject] = useState("");
  const [parentmainteam, set_parentmainteam] = useState("");
  const [defaultodbfoldername, set_defaultodbfoldername] = useState("");
  const [localimagelargeguid, set_localimagelargeguid] = useState("");
  const [localimagesmallguid, set_localimagesmallguid] = useState("");
  const [statusreason, set_statusreason] = useState("");
  const [birthday, set_birthday] = useState("");
  const [englishfamilyname, set_englishfamilyname] = useState("");
  const [englishfirstname, set_englishfirstname] = useState("");
  const [entrydate, set_entrydate] = useState("");
  const [gender, set_gender] = useState("");
  const [insurancestartdate, set_insurancestartdate] = useState("");
  const [maritalstatus, set_maritalstatus] = useState("");
  const [nationalid, set_nationalid] = useState("");
  const [numberofchildren, set_numberofchildren] = useState("");
  const [realbirthday, set_realbirthday] = useState("");
  const [currentsalary, set_currentsalary] = useState("");
  const [systemuseridmeta, set_systemuseridmeta] = useState("");

  const postData = () => {
    axios
      .post(
        "http://127.0.0.1:8000/system-users/",
        {
          mainteamname,
          systemuserid,
          organizationid,
          businessunitid,
          parentsystemuserid,
          firstname,
          lastname,
          fullname,
          internalemailaddress,
          mobilephone,
          domainname,
          createdon,
          modifiedon,
          createdby,
          modifiedby,
          isdisabled,
          skills,
          calendarid,
          activedirectoryguid,
          invitestatuscode,
          isactivedirectoryuser,
          queueid,
          transactioncurrencyid,
          defaultmailbox,
          userlicensetype,
          islicensed,
          positionid,
          positionidname,
          test,
          testdate,
          teststate,
          subsidiaryid,
          notificationchatid,
          mainteam,
          currenttask,
          ext,
          shamsidatestartcollaboration,
          id,
          cats,
          onsite,
          generateseller,
          happycustomerscount,
          unhappycustomerscount,
          mainproject,
          parentmainteam,
          defaultodbfoldername,
          localimagelargeguid,
          localimagesmallguid,
          statusreason,
          birthday,
          englishfamilyname,
          englishfirstname,
          entrydate,
          gender,
          insurancestartdate,
          maritalstatus,
          nationalid,
          numberofchildren,
          realbirthday,
          currentsalary,
          systemuseridmeta,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => console.log("Done"));
  };

  return (
    <>
      <Form layout="vertical">
        {/* Row 1 */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Team ID" colon={false}>
              <Input
                placeholder="e.g. C4A85000-9103-E611-80E5-000C29F57F35"
                onChange={(e) => set_mainteamname(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Organization ID" colon={false}>
              <Input
                placeholder="e.g. DECF85E3-6DA4-E411-80B7-000C29F57F35"
                onChange={(e) => set_systemuserid(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Business unit ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E411-80B7-000C29F57F35"
                onChange={(e) => set_organizationid(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 1 end */}

        {/* Row 2 */}
        <Row gutter={60}>
          <Col span={8}>
            <Form.Item label="Team ID" colon={false}>
              <Input
                placeholder="e.g. C4A85000-9103-E611-80E5-000C29F57F35"
                onChange={(e) => set_mainteamname(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Organization ID" colon={false}>
              <Input
                placeholder="e.g. DECF85E3-6DA4-E411-80B7-000C29F57F35"
                onChange={(e) => set_systemuserid(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Business unit ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E411-80B7-000C29F57F35"
                onChange={(e) => set_organizationid(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 2 end */}

        {/* Submit button */}
        <Row gutter={5}>
          <Col span={5}>
            <Button onClick={postData} type="primary" icon={<SaveOutlined />} />
          </Col>
        </Row>
        {/* Submit button end */}
      </Form>
    </>
  );
}

export default AddSystemUser;
