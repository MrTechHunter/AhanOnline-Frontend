import React, { useState } from "react";

import { SaveOutlined } from "@ant-design/icons";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Divider,
  DatePicker,
  Select,
} from "antd";

const { Option } = Select;

function AddTeam() {
  const [teamid, set_teamid] = useState("");
  const [organizationid, set_organizationid] = useState("");
  const [businessunitid, set_businessunitid] = useState("");
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");
  const [createdon, set_createdon] = useState("");
  const [modifiedon, set_modifiedon] = useState("");
  const [createdby, set_createdby] = useState("");
  const [modifiedby, set_modifiedby] = useState("");
  const [isdefault, set_isdefault] = useState(false);
  const [administratorid, set_administratorid] = useState("");
  const [queueid, set_queueid] = useState("");
  const [teamtype, set_teamtype] = useState("");
  const [teamtemplateid, set_teamtemplateid] = useState("");
  const [regardingobjecttypecode, set_regardingobjecttypecode] = useState("");
  const [manager, set_manager] = useState("");
  const [salespurchasemanager, set_salespurchasemanager] = useState("");
  const [id, set_id] = useState("");
  const [wegedetailaccount, set_wegedetailaccount] = useState("");
  const [poursantdetailaccount, set_poursantdetailaccount] = useState("");
  const [subsidiary, set_subsidiary] = useState("");
  const [wegefactorsdetailaccount, set_wegefactorsdetailaccount] = useState("");
  const [poursantfactorsdetailaccount, set_poursantfactorsdetailaccount] =
    useState("");
  const [unitmanager, set_unitmanager] = useState("");
  const [teampercentage, set_teampercentage] = useState("");
  const [goal, set_goal] = useState("");
  const [usercount, set_usercount] = useState("");
  const [newteamtype, set_newteamtype] = useState("");

  const postData = () => {
    console.log(teamid);
    console.log(organizationid);
    console.log(businessunitid);
    console.log(name);
    console.log(description);
    console.log(createdon);
    console.log(modifiedon);
    console.log(createdby);
    console.log(modifiedby);
    console.log(isdefault);
    console.log(administratorid);
    console.log(queueid);
    console.log(teamtype);
    console.log(teamtemplateid);
    console.log(regardingobjecttypecode);
    console.log(manager);
    console.log(salespurchasemanager);
    console.log(id);
    console.log(wegedetailaccount);
    console.log(poursantdetailaccount);
    console.log(subsidiary);
    console.log(wegefactorsdetailaccount);
    console.log(poursantfactorsdetailaccount);
    console.log(unitmanager);
    console.log(teampercentage);
    console.log(goal);
    console.log(usercount);
    console.log(newteamtype);
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
                onChange={(e) => set_teamid(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Organization ID" colon={false}>
              <Input
                placeholder="e.g. DECF85E3-6DA4-E411-80B7-000C29F57F35"
                onChange={(e) => set_organizationid(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Business unit ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E411-80B7-000C29F57F35"
                onChange={(e) => set_businessunitid(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 1 end */}

        {/* Row 2 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Name" colon={false}>
              <Input
                placeholder="e.g. BI Team"
                onChange={(e) => set_name(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Description" colon={false}>
              <Input
                placeholder="e.g. Business Intelligence Team"
                onChange={(e) => set_description(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Created on" colon={false}>
              <Input
                placeholder="e.g. 2021-12-26 05:24:55"
                onChange={(e) => set_createdon(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Modified on" colon={false}>
              <Input
                placeholder="e.g. 2021-12-26 05:24:55"
                onChange={(e) => set_modifiedon(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 2 end */}

        {/* Row 3 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Created by" colon={false}>
              <Input
                placeholder="e.g. Operator"
                onChange={(e) => set_createdby(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Modified by" colon={false}>
              <Input
                placeholder="e.g. Manager"
                onChange={(e) => set_modifiedby(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="is default" colon={false}>
              <Checkbox onChange={(e) => set_isdefault(!isdefault)}>
                is default
              </Checkbox>
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Administrator ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E411-80B5-000C29F27F35"
                onChange={(e) => set_administratorid(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 3 end */}

        {/* Row 4 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Queue ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E410-80B5-000C29F27F23"
                onChange={(e) => set_queueid(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Team type" colon={false}>
              <Input
                placeholder="e.g. 0"
                onChange={(e) => set_teamtype(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Team template ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E411-80B5-000C29F27F20"
                onChange={(e) => set_teamtemplateid(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Regarding object type code" colon={false}>
              <Input
                placeholder="e.g. 0"
                onChange={(e) => set_regardingobjecttypecode(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 4 end */}

        {/* Row 5 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Manager" colon={false}>
              <Input
                placeholder="e.g. D35DD4A6-1D46-E811-812C-000C19F57F52"
                onChange={(e) => set_manager(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Sales purchase manager" colon={false}>
              <Input
                placeholder="e.g. A6422B40-4CA4-E411-80B4-000C14F57C20"
                onChange={(e) => set_salespurchasemanager(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="ID" colon={false}>
              <Input
                placeholder="e.g. 145"
                onChange={(e) => set_id(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Wege detail account" colon={false}>
              <Input
                placeholder="e.g. 3AAFD04B-8E55-EB10-9950-005036B2E320"
                onChange={(e) => set_wegedetailaccount(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 5 end */}

        {/* Row 6 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Poursant detail account" colon={false}>
              <Input
                placeholder="e.g. 3BAFD04A-8E55-EF10-4050-005036B2E322"
                onChange={(e) => set_poursantdetailaccount(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Subsidiary" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                onChange={(e) => set_subsidiary(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Wege factors detail account" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                onChange={(e) => set_wegefactorsdetailaccount(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Poursant factors detail account" colon={false}>
              <Input
                placeholder="e.g. 3AAFD04B-8E55-EB10-9950-265036B2E312"
                onChange={(e) =>
                  set_poursantfactorsdetailaccount(e.target.value)
                }
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 6 end */}

        {/* Row 7 */}
        <Row gutter={35}>
          <Col span={5}>
            <Form.Item label="Unit manager" colon={false}>
              <Input
                placeholder="e.g. DF1B1516-2BA4-E411-80B7-000C29F57F35"
                onChange={(e) => set_unitmanager(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Team percentage" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                onChange={(e) => set_teampercentage(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Goal" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                onChange={(e) => set_goal(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="User count" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                onChange={(e) => set_usercount(e.target.value)}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="New team type" colon={false}>
              <Input
                placeholder="e.g. 100000000"
                onChange={(e) => set_newteamtype(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 7 end */}

        {/* Submit button */}
        <Row gutter={5}>
          <Col span={5}>
            <Button onClick={postData} type="primary">
              Submit
            </Button>
          </Col>
        </Row>
        {/* Submit button end */}
      </Form>
    </>
  );
}

export default AddTeam;
