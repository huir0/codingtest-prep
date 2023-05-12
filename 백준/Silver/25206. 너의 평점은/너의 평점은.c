#include <stdio.h>
#include <string.h>

int main() {
    double total_score = 0;
    double scores[9] = {4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0};
    char *grades[9] = {"A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"};
    double total_credit = 0;
    char subject[100], score[3];
    double credit;
    for (int i = 0; i < 20; i++) {
        scanf("%s %lf %s", subject, &credit, score);
        if (strcmp(score, "P") == 0) {
            continue;
        } else {
            for (int j = 0; j < 9; j++) {
                if (strcmp(score, grades[j]) == 0) {
                    total_score += credit * scores[j];
                    break;
                }
            }
            total_credit += credit;
        }
    }
    printf("%.6lf\n", total_score / total_credit);
    return 0;
}