import React from "react";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return <div>Product Key: {id}</div>;
}
