import React from "react";
import { Card } from "react-bootstrap";

interface ProductProps {
  Icon: React.ComponentType<any>;
  title: string;
  desc: string;
}

const ProductComponent: React.FC<ProductProps> = ({ Icon, title, desc }) => {
  return (
    <Card className="shadow-lg border-0 h-100 text-center p-4">
      <div className="mb-3 text-primary">
        <Icon size={48} />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-bold fs-5">{title}</Card.Title>
          <Card.Text className="text-muted small" style={{ minHeight: "60px" }}>
            {desc}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductComponent;
