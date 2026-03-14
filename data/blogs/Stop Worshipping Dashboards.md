---
title: Stop Worshipping Dashboards
date: 2026-03-14
---

Dashboards are one of the most recognisable tools is observability. Especially the pretty dashboards with lots of diagrams and colours. Despite being pretty, what are the purposes of dashboards? We build them for a reason right?

Observability is usually described through metrics, logs and traces. There's a ton of debate about which one of these is most important. Some argue that tracing is unequivocally the best thing ever, while others rely heavily on metrics. In practice, it matters less than people think. What actually matters is how the data helps engineers understand and fix problems.

## Dashboards as an Entry Point

A dashboard should act as a starting point for investigation, it shouldn't contain absolutely everything.

When something breaks, the process usually looks like this:

1. An alert fires and the on-call engineer is paged
2. The engineer opens a dashboard
3. The dashboard helps narrow down the problem
4. The engineer drills into metrics, logs or traces

The goal is clarity. A good dashboard should quickly answer questions such as:

- Is the system healthy?
- Which service is failing?
- Where should I investigate next?

## The Myth of the "Single Pane of Glass"

Many teams aim for a “single pane of glass” that shows the health of the entire system. In reality, complex systems require multiple layers of visibility.

A high-level dashboard might show whether a service is healthy, but deeper investigation will always require more detailed views. Instead of a literal single pane of glass, the real goal is a clear path from overview to diagnosis.

## When Engineers Use Dashboards

Dashboards are rarely watched constantly. Instead, they are typically used in two situations:

- **High-level monitoring** of system health
- **Incident investigation** triggered by alerts

Most of the time dashboards are **reactive tools**, used when something needs to be investigated.

## Dashboards Are Tools, Not the Goal

Dashboards are only one part of observability. Their real purpose is to increase velocity - the speed at which engineers can move from signal to understanding.

A good dashboard helps teams detect problems, narrow the scope of an issue, and guide the next step in diagnosing the system. Whether the answer ultimately comes from a metric, a trace or a log is less important.

From the user’s perspective, the method doesn’t matter. An incident might be resolved with a single trace and two log lines. What matters is how quickly the system returns to normal. In the end, dashboards are not about displaying information - they are about shortening the time between failure and recovery.
