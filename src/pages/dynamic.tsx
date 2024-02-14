import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
  name: string;
  timestamp: Date;
}

const Dynamic: NextPage<{ serverSideData: ApiResponse }> = (props) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("/api/hello").then((res) => res.json());
      setClientSideData(data);
    } catch (error) {
      console.error("Erro ao obter dados do cliente:", error);
    }
  };

  return (
    <Container tag="main">
      <h1 className="my-5">Como funciona a renderização no Next.js</h1>

      <Row>
        <Col>
          <h1>Gerado do servidor:</h1>
          <h2>{props.serverSideData?.timestamp.toString()}</h2>
        </Col>
        <Col>
          <h1>Gerado do cliente:</h1>
          <h2>{clientSideData?.timestamp.toString()}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_APIURL;

    if (!apiUrl) {
      throw new Error("Variável de ambiente NEXT_PUBLIC_APIURL não definida");
    }

    const response = await fetch(`${apiUrl}/api/hello`);

    if (!response.ok) {
      throw new Error(`Erro ao obter dados do servidor. Status: ${response.status}`);
    }

    const serverSideData: ApiResponse = await response.json();

    return {
      props: {
        serverSideData,
      },
    };
  } catch (error) {
    console.error("Erro ao obter dados do servidor:", error);

    return {
      props: {
        serverSideData: null,
      },
    };
  }
};

export default Dynamic;
