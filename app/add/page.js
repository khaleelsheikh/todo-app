"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import AddToDo from "./AddToDo";

export default function AddToDoPage() {
  return (
    <>
      <Header />
      <AddToDo />
    </>
  );
}
