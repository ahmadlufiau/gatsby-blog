import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Title>Let's build something together!</Title>
    <Paragraph>
      Interested in hiring me for your project or just want to say hi? You can
      fill in the contact form below or send me an email to{' '}
      <a href="mailto:linconkusunoki@gmail.com">linconkusunoki@gmail.com</a>
    </Paragraph>
    <form>
      <Label for="name">Name</Label>
      <Input type="text" id="name" name="name" placeholder="John Doe" />
      <Label for="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="john.doe@gmail.com"
      />
      <Label for="subject">Subject</Label>
      <Input
        type="text"
        id="subject"
        name="subject"
        placeholder="New opportunity"
      />
      <Label for="message">Message</Label>
      <Textarea
        type="text"
        id="message"
        name="message"
        rows="5"
        placeholder="Hello Lincon!"
      />
      <Button>Send</Button>
    </form>
  </Layout>
)
const Title = styled.h1`
  color: #44475a;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  margin-top: ${props => props.mt && '4rem'};
`
const Paragraph = styled.p`
  color: #44475a;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  margin: ${props => (props.m0 ? 0 : '1.6rem 0')};
  a {
    color: #1fa1f2;
  }
`
const Input = styled.input`
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  :focus {
    border-color: #222;
    outline: none;
  }
`
const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  :focus {
    border-color: #222;
    outline: none;
  }
`
const Label = styled.label`
  font-size: 1rem;
  color: #44475a;
  display: block;
  margin-bottom: 5px;
`
const Button = styled.button`
  background: #6272a4;
  border-radius: 6px;
  border: none;
  color: #f8f8f2;
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-decoration: none;
  min-width: 200px;
  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`
export default ContactPage