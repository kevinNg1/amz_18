import 'package:flutter/material.dart';
import '../widgets/timeline_item.dart';
import 'terminal_page.dart';

class TimelinePage extends StatelessWidget {
  const TimelinePage({super.key});

  @override
  Widget build(BuildContext context) {
    final events = [
      'Day 1 — We met at the gym',
      'Day 7 — First real conversation',
      'Day 14 — I realized I liked you',
      'Day 21 — I started looking forward to seeing you every day',
      'Day 25 — You were the best part of my day',
      'Day 30 — I built this app',
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Our First Month'),
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          final maxWidth = constraints.maxWidth > 700 ? 700.0 : constraints.maxWidth;

          return Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24),
              child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: maxWidth),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    ...events.map((e) => TimelineItem(text: e)),
                    const SizedBox(height: 30),
                    Align(
                      alignment: Alignment.center,
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (_) => const TerminalPage()),
                          );
                        },
                        child: const Text('Next'),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}