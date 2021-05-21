---
marp: true
theme: uncover
_class: invert
---

![w:320](https://grpc.io/img/logos/grpc-logo.png)

#### A high performance, open source universal RPC framework

---

# Did you know...

REST dominates.
But it isn't the only API architecture available

---

# What is gRPC? 🤔

A **R**emote **P**rocedure **C**all (RPC) framework that can run in **any environment**. A client application can directly call a method on a server application on a different machine as if it were a local object.

---

# When to use gRPC? 🤷‍♂️

gRPC uses HTTP/2 and Google's protocol buffer to provide ~7x speed increase when compared to REST.

This makes it perfect for:

Internal Services
Client Libraries
Mobile Apps
Real-time streaming

---

# When **not** to use gRPC? 😢

gRPC **is not** yet natively supported in the browser, although there are ongoing efforts!

Third-party integrations (webhooks)

It is slower to implement: 10mins to build a REST API, ~45mins to build a gRPC API.

---

## Protocol Buffers

Google’s mature open source mechanism for serializing structured data (although it can be used with other data formats such as JSON).

![w:500](https://www.grpc.io/img/landing-2.svg)

---

Platform and language agnostic like JSON

Serializes and deserializes structured data to communicate via binary.

Highly compressed format, so not easily human readable

Payload size is reduced because of `protoc`

---

### A simple `.proto` file

```proto
service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```

---

A simple example

---

# Lets re-write! 😲

gRPC definitely has advantages over REST, but it is not yet widely adopted.

_Will its benefits spur greater adoption?_

In comparison, REST is widely supported, understood and will remain the defacto standard for many years to come.
