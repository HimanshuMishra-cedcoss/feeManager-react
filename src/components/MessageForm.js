import React, { useState } from "react";
import axios from "axios";
import { PageHeader, Space, Input, Form, Row, Col, Button } from "antd";
function MessageForm() {
  const { TextArea } = Input;
  const [smstext, setSmstext] = useState({
    registration: "",
    holiday: "",
    fees: "",
  });
  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/smstext/", {
        data: smstext.registration,
      })
      .then(function (response) {
        console.log(response.data);
      });
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="Message Box"
        subTitle="Here You Can Edit All Type of Message Notifications."
      />

      <br />
      <Row justify={"center"}>
        <Col span={15}>
          <Form layout="vertical">
            <Form.Item label="Registration Message">
              <TextArea
                placeholder="Type message to send on the time of registration."
                autoSize={{
                  minRows: 3,
                }}
                onChange={(e) =>
                  setSmstext({ ...smstext, registration: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label="Fees Message">
              <TextArea
                placeholder="Type message for send notification of fees alert."
                autoSize={{
                  minRows: 3,
                }}
                onChange={(e) =>
                  setSmstext({ ...smstext, fees: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label="Holidays Message">
              <TextArea
                placeholder="Type message for send notification in holidays."
                autoSize={{
                  minRows: 3,
                }}
                onChange={(e) =>
                  setSmstext({ ...smstext, holiday: e.target.value })
                }
              />
            </Form.Item>
          </Form>
          <Button
            type="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default MessageForm;
