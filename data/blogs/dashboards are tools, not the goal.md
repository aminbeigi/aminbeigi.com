---
title: Dashboards Are Tools, Not The Goal
date: 2026-03-14
---

I stumbled across a dashboard on one of the popular observability platforms. It looked polished, colourful and impressive. But I was pretty damn sure no one was actually getting much value from it. It essentially was just serving as [eye candy](https://dictionary.cambridge.org/dictionary/english/eye-candy).

Observability is usually described through logs, metrics and traces. There's a ton of debate about which one of these is most important. Some argue that tracing is unequivocally the best thing ever, while others rely heavily on metrics. In practice, it matters less than people think. What actually matters is how the data helps engineers understand and fix problems. Despite being pretty, what are the purposes of dashboards? We build them for a reason right?

## Dashboards as an Entry Point

A dashboard should act as a starting point for investigation, it shouldn't contain absolutely everything. Many teams aim for a "single pane of glass" that shows the health of the entire system. In reality, complex systems require multiple layers of visibility.

When something breaks, the process usually looks like this:

1. An alert fires and the on-call engineer is paged
2. The engineer opens a dashboard
3. The dashboard helps narrow down the problem
4. The engineer drills into log, metrics or traces

The goal is clarity. A good dashboard should quickly answer questions such as:

- Is the system healthy?
- Which service is failing?
- Where should I investigate next?

## Final Reflection

Dashboards are only one part of observability. Their real purpose is to help teams detect problems, narrow the scope of an issue, and guide the next steps in diagnosing the system.

Whether the answer ultimately comes from a log, a metric or a trace is less important. From the customer's perspective, the method doesn’t matter. They just want the thing to work as expected. An incident might be resolved with a single trace and two log lines. What matters is how quickly the system returns to normal. Ultimately, dashboards are not about displaying information - they are about shortening the time between failure and recovery.
