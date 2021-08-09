import { useState } from 'react';
import { Row, Col, Modal } from "antd";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper,ButtonContainer,Title, ContactContainer, Para} from "./styles";
import axios from "axios";
import { Form, Input} from 'antd';
interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
}

const MiddleBlock = ({ title, content, button }: MiddleBlockProps) => {

  const [isFormModalVisible, setIsFormModalVisible] = useState(false);
  const [showPendingButton, setShowPendingButton] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [form] = Form.useForm();


  const onFinish = (values: any) => {
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    setIsFormModalVisible(true);
  };

  const handleCancel = () => {
    setIsFormModalVisible(false);
    setShowErrorMessage(false);
    setShowPendingButton(false);
    form.resetFields();
  };
  const handleSuccessCancel = () => {
    setShowSuccessModal(false);
    setShowErrorMessage(false);
    setShowPendingButton(false);
  }

  const handleSubmit = (values: any) => {

    const url = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";
    setShowPendingButton(true);
    axios
      .post(url, {
        ...values,
      })
      .then((res) => {
        console.log(res);
        setShowPendingButton(false);
        console.log('show success !');
        handleCancel();
        setShowSuccessModal(true);
        
      })
      .catch((err) =>{
        console.log('error is now',err);
        setShowErrorMessage(true);
        setShowPendingButton(false);
      });
    
  };

  return (
    <>
    <MiddleBlockSection>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{(title)}</h6>
              <Content>{content}</Content>
              {button && (
                <Button name="submit" onClick={showModal}>
                  {button}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
    </MiddleBlockSection>

    <Modal forceRender visible={isFormModalVisible} centered closable={false} cancelText onCancel={handleCancel} destroyOnClose={true} footer={[
    null,
  ]}>
    <ContactContainer>
    <Title>Request an invite</Title>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form = {form}
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail!' },
          { required: true, message: 'Please input your E-mail!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Confirm E-mail"
        name="confirm"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail!' },
          { required: true, message: 'Please input your E-mail!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('email') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two E-mails that you entered do not match!'));
            },
          })
        ]}
      >
        <Input/>
      </Form.Item>

      {showErrorMessage&&<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Para>{"Request failed, please try again!"}</Para>
      </Form.Item>}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      {!showPendingButton&&<Button name="Submit" >{"Submit"}</Button>}
      {showPendingButton&&<Button color="white" name="Pending Please Wait" >{"Pending Please Wait"}</Button>}
      </Form.Item>
    </Form>
    </ContactContainer>

    </Modal>

    <Modal forceRender visible={showSuccessModal} centered closable={false} cancelText onCancel={handleSuccessCancel} destroyOnClose={true} footer={[
    null,
    null,
  ]}>
            <Title>All Done!</Title>
             <ContactContainer>
               <Para>You will be one of the first to experience Broccoli & Co. when we launch!</Para>
               <ButtonContainer>
                <Button name="OK" onClick = {handleSuccessCancel}>{"OK"}</Button>
                </ButtonContainer>
              </ContactContainer>
    </Modal>
  </>
  );
};

export default MiddleBlock;
