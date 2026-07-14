import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: Props) {
  return (
    <Html>
      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily: "Arial",
        }}
      >
        <Container
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Heading>New Portfolio Contact</Heading>

          <Hr />

          <Text>
            <strong>Name:</strong> {name}
          </Text>

          <Text>
            <strong>Email:</strong> {email}
          </Text>

          <Text>
            <strong>Subject:</strong> {subject}
          </Text>

          <Hr />

          <Text>{message}</Text>

        </Container>
      </Body>
    </Html>
  );
}