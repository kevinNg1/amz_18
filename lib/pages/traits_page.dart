import 'package:flutter/material.dart';
import '../widgets/trait_card.dart';
import 'timeline_page.dart';

class TraitsPage extends StatelessWidget {
  const TraitsPage({super.key});

  @override
  Widget build(BuildContext context) {
    final traits = [
      'You make the gym more fun',
      'Your laugh is a 10/10',
      "You\'re secretly competitive",
      'Talking to you feels easy',
      'I look forward to seeing you every day',
      'You make my day better without trying',
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text("Things I've Learned About You"),
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
                    ...traits.map((t) => TraitCard(text: t)),
                    const SizedBox(height: 24),
                    Align(
                      alignment: Alignment.center,
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (_) => const TimelinePage()),
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