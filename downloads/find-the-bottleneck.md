# Find the Bottleneck
## A practical field guide to diagnosing and improving slow business workflows

**Agentic Agency | Operations Field Guide 01**

**Time to first diagnosis:** 20–30 minutes if the process and people are available. Reliable improvement may require days or weeks of observation and testing.

Your team may not be slow. Your process may be producing work faster than one part of it can handle. When work piles up at a handoff, making other steps faster can add unfinished work without increasing what the customer receives.

This guide takes you from **a vague feeling of delay** to **a testable explanation of where the workflow is constrained and what to change**.

> **The four-step promise:** map the work → measure queues → fix the limiting cause → verify and repeat.

We use a simple quote-approval example throughout, but the method also works for onboarding, invoicing, recruitment, document processing, reporting, client approvals, and support cases.

---

## 0. What a bottleneck actually is

A **bottleneck (or active system constraint)** is the point limiting the end-to-end output of a process. It may be a particular person or tool, but it can also be a policy, schedule, information dependency, outsourced step, or decision rule.

Three concepts to separate:

- **Delay:** a case has been waiting. The wait is visible, but the cause may be elsewhere.
- **Queue / work in progress (WIP):** unfinished cases waiting for or undergoing work.
- **Constraint:** the factor that, if improved appropriately, allows the system to deliver more usable output or meet its performance goal.

**Do not select the "slowest-looking employee" as the bottleneck.** One step can have very little touch time yet cause long delays because its queue is never cleared. Another can take hours of work but have enough capacity to keep up with demand.

**Important correction:** Improving a non-constraining step does not necessarily make the total process's throughput slower. It may instead increase the queue and lead time while throughput remains capped by the constraint. This distinction matters when deciding what to optimize.

### Worked case: quotations

Imagine a simple sequential process, with comparable quote requests and sustained daily rates:

| Stage | Effective capacity |
|---|---:|
| Draft quotes | 20/day |
| Approve quotes | **8/day** |
| Send quotes | 16/day |

**New requests:** 12/day.

If approvals really can complete only 8 per day and the other steps are available, end-to-end completion is limited to approximately **8/day**. Unfinished work grows by approximately **4/day** while those conditions persist. Increasing drafting from 20/day to 30/day does not increase customer-visible completion.

This is a **teaching model**, not a prediction of an actual company. Real workflows include variable arrivals, priorities, differing case complexity, rework, batching, and time off.

---

# Part 1 — Define the process and the outcome

### What to do

Choose **one** repeatable service or business process. It should have:

1. A clear event that starts the work.
2. A recognizable unit of work (one quote, invoice, case, or request).
3. A customer-visible or business-relevant end.
4. People who can explain what happens between those endpoints.
5. A measurable result, not just a subjective feeling that people are busy.

Write:

> When **[trigger]** happens, **[team]** does **[work]** until **[outcome]** is delivered.

**Example:** When a prospect requests pricing, the sales team drafts, reviews, and sends an accurate quotation.

**Define success** before touching tools. A useful set is:

- End-to-end lead time (request-to-delivery).
- Correct, usable cases completed per week (throughput).
- Rework or error rate.
- Reliability against the promised delivery date.

### Worksheet 1 — Scope

- **Workflow name:**
- **Customer or recipient:**
- **Start event:**
- **End event:**
- **Unit of work:**
- **Usual weekly volume:**
- **Observed complaint or missed promise:**
- **Desired outcome:**
- **Process owner:**

**Stop here if:** you cannot identify a beginning, end, and owner. Otherwise your "diagnosis" will change shape every time you discuss it.

---

# Part 2 — Map the current state

This is a lightweight **Value Stream Map**. You do not need specialized diagramming software.

### Walk the real work, not the official process

For each step, capture:

- What arrives and in what format.
- Who or what performs it.
- Where the work is stored.
- What must happen before someone can begin.
- When the item joins a queue.
- When active work starts and finishes.
- Whether the item moves forward, loops backward, or is blocked.
- Which approvals and exceptions exist.

A simple notation works:

`[Request] → [Draft] → [Manager review] → [Send]`

Add queue locations underneath:

`[Request inbox] → [Drafting queue] → [Manager inbox] → [Outgoing queue]`

Mark rework loops, for example: review sends quote back for missing pricing evidence.

### The fastest way to get an honest map

Sit with the people doing the work and follow **five recent real cases** from beginning to end. Compare an easy case, an ordinary case, and one that became stuck. If these follow different paths, show the branches instead of forcing them into a single neat line.

### Worksheet 2 — Process map

| # | Step | Owner | Trigger/input | Work performed | Queue/location | Output | Rework or exception |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |
| 4 | | | | | | | |
| 5 | | | | | | | |

**Deliverable:** one current-state process map with real handoffs, not a slide showing what everyone hopes happens.

---

# Part 3 — Measure the delays and capacity

You cannot diagnose a bottleneck from a diagram alone. Collect a small, consistent sample.

**Start with 10–20 comparable cases when available.** If case volumes are low or complexity differs greatly, observe longer and group similar case types before comparing.

### Record timestamps

For each step of each case:

- `queue_entered_at`: when the step became ready to receive the case.
- `work_started_at`: when work actually began.
- `work_completed_at`: when the case was handed onward.
- `returned_for_rework`: yes/no.
- `hold_reason`: e.g., absent approver, missing documents, policy exception.

Also record total new arrivals and correctly completed cases over the **same reporting period**.

**Download the companion template:** [Process measurement CSV](./process-measurement-template.csv) — on the hosted resource page, use the Measurement Sheet button. (Within this download folder, the CSV is `process-measurement-template.csv`.)

### Compute five practical indicators

**1. End-to-end lead time:** time from the process start event to the final delivered outcome, including waits. Report a median and 90th percentile where your sample makes this meaningful.

**2. Touch/processing time:** actual active work, separated from waiting. Review can take 8 minutes and still hold a quote for days.

**3. Queue length and age:** count unfinished items at each handoff and how long the oldest items have waited. Observe this repeatedly, e.g., at the same time each workday.

**4. Throughput:** correctly finished units per day or week. Avoid counting drafts as completed quotes if the customer has not received them.

**5. Effective capacity and first-pass quality:** how many comparable cases a step could sustainably complete while fed with ready work, after typical breaks, meetings, exceptions, and rework; and how many pass without being returned.

Do not mistake a step's **observed completions** for its **maximum capacity** if it had no work available for much of the period.

### Optional: Little's Law

For a sufficiently stable process with consistent boundaries and averages:

`Average WIP = throughput rate × average lead time`

Rearranged:

`Average lead time = average WIP / throughput rate`

Example: if a stable process has an average of **24 open quotes** and completes **8 quotes/workday**, average lead time is about **3 workdays**.

**Limitation:** If the backlog is growing steadily, this steady-state average relationship should not be used as a trustworthy forecast of a single quote's wait.

### Worksheet 3 — Baseline

| Metric | Baseline | How measured | Period |
|---|---|---|---|
| Arrivals per day | | | |
| Finished units per day | | | |
| Median end-to-end lead time | | | |
| 90th-percentile lead time | | | |
| WIP at each queue | | | |
| Age of oldest open case | | | |
| Rework rate | | | |
| On-time delivery rate | | | |

---

# Part 4 — Confirm the likely constraint

A queue is a **signal**, not proof. Compare several kinds of evidence.

### Three checks

**A. Persistent accumulation**

Does the queue grow for multiple observation periods? Is the oldest item getting older? A one-time spike does not necessarily mean the step is the system constraint.

**B. Arrival rate versus sustainable capacity**

Compare how much ready work arrives with what the step can sustainably complete. A step asked to handle 12 similar cases per day but capable of only 8 is a strong capacity-constraint candidate.

**C. Effect on downstream results**

Do later stages often wait for output from this step? Does increasing upstream output mainly increase unfinished work? Do customer deliveries remain limited?

### Don't confuse different mechanisms

| What you see | Investigate first |
|---|---|
| A large queue and lower capacity than arrivals | Real capacity shortage, rework, availability |
| A large queue despite sufficient average capacity | Batching, priority policies, variation, scheduling |
| A queue of "incomplete" cases | Input quality, missing documents, upstream handoff |
| Work bounced backward repeatedly | Error and rework loops, unclear acceptance criteria |
| Many tasks being started, few completed | Excess WIP, context switching, multitasking |
| Delays only around specific people or days | Scarce authorization, absence coverage, timed releases |

### Worksheet 4 — Evidence for your constraint

- **Candidate limiting step:**
- **Daily arrivals / cases ready:**
- **Measured effective capacity:**
- **Queue trend over time:**
- **Oldest item age:**
- **Effect on correctly finished output:**
- **Alternative explanation ruled in/out:**
- **Confidence: high / medium / low:**
- **What evidence would disprove this hypothesis?**

**Rule:** If all measured capacities are higher than mean demand but work still waits, look carefully at timing, variability, batching, routing, and missing inputs. Average rates alone are not enough.

---

# Part 5 — Find the cause, not the person to blame

Apply **5 Whys** to a specific, observed problem. It is a starting point for root-cause investigation, not a guarantee of one root cause or a requirement to stop exactly at five.

### Worked example — hypothetical

1. **Why are quotes late?** They wait for approval.
2. **Why does approval accumulate?** About 12 arrive and 8 are finished daily.
3. **Why only 8?** Every quote requires repetitive manual checking and context gathering.
4. **Why is context gathering required?** The intake omits standard pricing and risk evidence.
5. **Why does intake omit it?** The approval template and authorization policy have not kept pace with the current process.

**Hypothesis to test:** standardizing the review packet and revisiting approval thresholds might remove unnecessary review work and increase effective capacity.

**Evidence needed:** recent review durations, rejection reasons, missing fields, manager time allocation, and the actual requirement for each approval. Do not eliminate risk controls without appropriate authorization.

### Six categories of causes

- **Policy:** all cases require sign-off even when risks vary.
- **Information:** the next person does not have what they need.
- **Capacity:** available qualified working time is genuinely insufficient.
- **Batching:** approvals run once a day/week rather than as work arrives.
- **Quality:** errors generate repeated loops.
- **Dependencies:** outside teams, customers, suppliers, or systems delay an item.

### Worksheet 5 — Root cause

- **Symptom:**
- **Cause hypothesis 1:**
- **Cause hypothesis 2:**
- **Cause hypothesis 3:**
- **Evidence supporting each:**
- **Most plausible verified mechanism:**
- **Who can validate it?**
- **Control or customer requirement that must be protected:**

---

# Part 6 — Improve using the Theory of Constraints

The **Five Focusing Steps** offer an order for intervention.

### 1. Identify

Name the current constraint using the evidence from Parts 3 and 4.

### 2. Exploit

Make better use of existing constraint capacity **before** spending money.

In the quote example:

- Make incoming quotes complete and ready to review.
- Remove duplicate manual checks when they are redundant.
- Set a focused review window or service-level priority.
- Surface exceptions clearly instead of making a reviewer hunt for context.
- Avoid using your scarce reviewer for unrelated administration.

### 3. Subordinate

Align the rest of the process to support the constraint.

Examples:

- Limit how much new work is released to a constrained review queue.
- Prioritize complete cases, not whoever asks loudest.
- Avoid increasing upstream drafting just to make drafting numbers look good.
- Ensure downstream staff are ready to send approved quotes promptly.

### 4. Elevate

If existing capacity and coordination are genuinely insufficient, invest deliberately.

Possible options:

- Delegate low-risk approvals within documented authority.
- Train a second reviewer or add coverage.
- Redesign the policy.
- Add a narrowly scoped integration or automation.
- Use AI for document summarization or packet preparation **with checks**, where justified.

**AI is not a default solution.** It belongs only where it directly removes a verified cause and its output can be appropriately checked.

### 5. Repeat

Once approval is no longer limiting, reassess the full process. New bottlenecks can appear in drafting, sending, customer responses, or elsewhere. Do not keep optimizing yesterday's constraint.

### Worksheet 6 — Intervention choices

For each candidate improvement, score **impact on final output**, **time to test**, **cost**, **quality risk**, and **reversibility**.

| Option | Cause addressed | Expected benefit | Cost/effort | Risk/control | Test first? |
|---|---|---|---|---|---|
| Standardized review packet | Missing info | | | | |
| Approval thresholds | Policy over-review | | | | |
| More frequent review windows | Batching | | | | |
| Rule-based field validation | Manual checks | | | | |
| Extra qualified reviewer | True capacity gap | | | | |

Start with the **lowest-risk reversible change** that addresses a measured cause—not the most impressive new technology.

---

# Part 7 — Pilot, measure, and control

This is the logic behind **DMAIC**: Define, Measure, Analyze, Improve, Control.

### Your experiment contract

Write it before making the change:

- **Problem and scope:** what exact delay are you addressing?
- **Hypothesis:** why will this change improve the whole workflow?
- **One intervention:** what exactly changes?
- **Owner:** who is accountable for implementation and measurement?
- **Start/end dates:** when will the pilot run?
- **Baseline:** current throughput, lead time, queue size/age, quality.
- **Success criteria:** target improvement in customer-visible results.
- **Guardrails:** approvals, compliance, errors, customer complaints, costs.
- **Rollback condition:** what failure makes you revert?

Compare similar case types over comparable days and volumes. Record changes in demand, staffing, holidays, or case mix; otherwise the before/after comparison may be misleading.

### Hypothetical follow-up

Imagine the quote team improves effective approval capacity from **8/day** to **15/day**, without weakening necessary checks. Drafting still handles 20/day and sending 16/day. New demand remains 12/day.

The team can now keep up with incoming work. If it begins with **20 ready approvals** waiting, it could work off approximately **3 extra backlog items/day**, taking about **7 working days**, under stable assumptions.

But a higher approval number is not the result on its own. Verify:

- More correct quotes actually reach customers.
- Median and high-percentile end-to-end lead times improve.
- The oldest open quote gets younger.
- Rework and approval errors do not rise.
- There is no new downstream pile.

### Worksheet 7 — Before and after

| Measure | Before | Target | Actual after pilot | Notes |
|---|---|---|---|---|
| End-to-end lead time | | | | |
| Correct completions/day | | | | |
| Queue size at constraint | | | | |
| Oldest item age | | | | |
| Rework/error rate | | | | |
| Cost per completed case | | | | |

**Control plan:** decide who watches these metrics, how often, and what threshold requires another investigation. Update documentation and team responsibilities once the improvement is verified.

---

# One-page diagnosis summary

Fill this out after working through the guide. It is the main deliverable.

**Workflow:** __________________________________________

**Start event:** ________________________________________

**Completed customer-visible outcome:** ___________________

**Unit of work:** ________________________________________

**What data was sampled, and when?** ______________________

**Measured daily arrivals:** _____________________________

**Current completed output/day:** _________________________

**Main queue and oldest item:** ___________________________

**Likely limiting step:** _________________________________

**Evidence for the constraint:** __________________________

**Root-cause hypothesis:** ________________________________

**Evidence for that cause:** ______________________________

**One change to test:** __________________________________

**Owner and dates:** _____________________________________

**Success criteria:** ____________________________________

**Guardrail / rollback condition:** _______________________

**Result after pilot:** __________________________________

**Next constraint or next experiment:** ___________________

## The final sentence

> Our **[workflow]** is delayed at **[step]**. We believe **[cause]** because **[evidence]**. Over **[period]**, **[owner]** will test **[change]**. We'll compare **[output, end-to-end time, queue and quality]**, then repeat the diagnosis if the constraint moves.

---

## Reading and references

- Lean Enterprise Institute, **Value Stream Mapping**: https://www.lean.org/lexicon-terms/value-stream-mapping/
- Theory of Constraints Institute, **Five Focusing Steps**: https://www.tocinstitute.org/five-focusing-steps.html
- Institute for Healthcare Improvement, **5 Whys**: https://www.ihi.org/library/tools/5-whys-finding-root-cause
- American Society for Quality, **Six Sigma Tools / DMAIC**: https://asq.org/quality-resources/sixsigma/tools
- ASCM glossary, **Little's Law**: https://learn.ascm.org/sfc/servlet.shepherd/document/download/069R3000006PlDHIA0?operationContext=S1

This is a practical adaptation of those frameworks for service and office workflows; it is not a certified Lean Six Sigma assessment.

**Agentic Agency** · https://agenticagency.io
