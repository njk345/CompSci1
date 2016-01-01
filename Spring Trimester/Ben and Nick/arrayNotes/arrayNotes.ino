/**
Authors: Nick Keirstead and Ben Shapiro
Date: 5/6/14


**/


//defining global variables for note values in a chromatic scale
#define NOTE_C4 262
#define NOTE_CS4 277
#define NOTE_D4 294
#define NOTE_DS4 311
#define NOTE_E4 330 
#define NOTE_F4 349
#define NOTE_FS4 370
#define NOTE_G4 392
#define NOTE_GS4 415
#define NOTE_A4 440
#define NOTE_AS4 466
#define NOTE_B4 494
#define NOTE_C5 523

const int kPinSpeaker = 9;

//array containing note values for the C major scale
int scale [] = {
  NOTE_C4, NOTE_D4, NOTE_E4, NOTE_F4, NOTE_G4, NOTE_A4, NOTE_B4, NOTE_C5
};

void setup () {
 pinMode(kPinSpeaker, OUTPUT); 
}

int quarterNote = 500;//length of space between notes in scale (will be multiplied)
void loop () {
  for (int note = 0; note < 8; note ++) {
    tone(kPinSpeaker, scale[note], 500); //looping through array to play notes
    delay(quarterNote*1.3);
  }
  delay(2000); //wait 2 secs, do the scale again
}
