import { Audio } from "expo-av";
import { AUDIO } from "@/constants";

class AudioService {
  private backgroundMusic: Audio.Sound | null = null;
  private soundEffects: Map<string, Audio.Sound> = new Map();
  private isMusicEnabled = true;
  private isSoundEnabled = true;
  private musicVolume = 0.5;
  private sfxVolume = 0.7;

  async init(): Promise<void> {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
    } catch (error) {
      console.error("Failed to initialize audio service:", error);
    }
  }

  // Background music methods
  async loadBackgroundMusic(track: keyof typeof AUDIO.bgm): Promise<void> {
    try {
      if (this.backgroundMusic) {
        await this.backgroundMusic.unloadAsync();
      }

      const { sound } = await Audio.Sound.createAsync(
        require(`@/assets/sounds/${AUDIO.bgm[track]}`),
        {
          isLooping: true,
          volume: this.musicVolume,
        }
      );

      this.backgroundMusic = sound;
    } catch (error) {
      console.error("Failed to load background music:", error);
    }
  }

  async playBackgroundMusic(track: keyof typeof AUDIO.bgm): Promise<void> {
    if (!this.isMusicEnabled) return;

    try {
      await this.loadBackgroundMusic(track);
      if (this.backgroundMusic) {
        await this.backgroundMusic.playAsync();
      }
    } catch (error) {
      console.error("Failed to play background music:", error);
    }
  }

  async stopBackgroundMusic(): Promise<void> {
    try {
      if (this.backgroundMusic) {
        await this.backgroundMusic.stopAsync();
      }
    } catch (error) {
      console.error("Failed to stop background music:", error);
    }
  }

  async pauseBackgroundMusic(): Promise<void> {
    try {
      if (this.backgroundMusic) {
        await this.backgroundMusic.pauseAsync();
      }
    } catch (error) {
      console.error("Failed to pause background music:", error);
    }
  }

  async resumeBackgroundMusic(): Promise<void> {
    if (!this.isMusicEnabled) return;

    try {
      if (this.backgroundMusic) {
        await this.backgroundMusic.playAsync();
      }
    } catch (error) {
      console.error("Failed to resume background music:", error);
    }
  }

  async setMusicVolume(volume: number): Promise<void> {
    this.musicVolume = Math.max(0, Math.min(1, volume));

    try {
      if (this.backgroundMusic) {
        await this.backgroundMusic.setVolumeAsync(this.musicVolume);
      }
    } catch (error) {
      console.error("Failed to set music volume:", error);
    }
  }

  // Sound effects methods
  async loadSoundEffect(effect: keyof typeof AUDIO.sfx): Promise<void> {
    try {
      if (this.soundEffects.has(effect)) {
        const existingSound = this.soundEffects.get(effect);
        if (existingSound) {
          await existingSound.unloadAsync();
        }
      }

      const { sound } = await Audio.Sound.createAsync(
        require(`@/assets/sounds/${AUDIO.sfx[effect]}`),
        {
          volume: this.sfxVolume,
        }
      );

      this.soundEffects.set(effect, sound);
    } catch (error) {
      console.error(`Failed to load sound effect ${effect}:`, error);
    }
  }

  async playSoundEffect(effect: keyof typeof AUDIO.sfx): Promise<void> {
    if (!this.isSoundEnabled) return;

    try {
      let sound = this.soundEffects.get(effect);

      if (!sound) {
        await this.loadSoundEffect(effect);
        sound = this.soundEffects.get(effect);
      }

      if (sound) {
        await sound.replayAsync();
      }
    } catch (error) {
      console.error(`Failed to play sound effect ${effect}:`, error);
    }
  }

  async setSoundEffectVolume(volume: number): Promise<void> {
    this.sfxVolume = Math.max(0, Math.min(1, volume));

    try {
      for (const sound of this.soundEffects.values()) {
        await sound.setVolumeAsync(this.sfxVolume);
      }
    } catch (error) {
      console.error("Failed to set sound effect volume:", error);
    }
  }

  // Settings methods
  setMusicEnabled(enabled: boolean): void {
    this.isMusicEnabled = enabled;

    if (!enabled) {
      this.pauseBackgroundMusic();
    } else {
      this.resumeBackgroundMusic();
    }
  }

  setSoundEnabled(enabled: boolean): void {
    this.isSoundEnabled = enabled;
  }

  isMusicPlaying(): boolean {
    return this.backgroundMusic !== null;
  }

  // Preload all audio assets
  async preloadAllAudio(): Promise<void> {
    try {
      // Preload background music
      for (const track of Object.keys(AUDIO.bgm)) {
        await this.loadBackgroundMusic(track as keyof typeof AUDIO.bgm);
      }

      // Preload sound effects
      for (const effect of Object.keys(AUDIO.sfx)) {
        await this.loadSoundEffect(effect as keyof typeof AUDIO.sfx);
      }
    } catch (error) {
      console.error("Failed to preload audio assets:", error);
    }
  }

  // Cleanup
  async cleanup(): Promise<void> {
    try {
      if (this.backgroundMusic) {
        await this.backgroundMusic.unloadAsync();
        this.backgroundMusic = null;
      }

      for (const sound of this.soundEffects.values()) {
        await sound.unloadAsync();
      }
      this.soundEffects.clear();
    } catch (error) {
      console.error("Failed to cleanup audio service:", error);
    }
  }

  // Game-specific audio methods
  async playPlantSound(): Promise<void> {
    await this.playSoundEffect("plant");
  }

  async playHarvestSound(): Promise<void> {
    await this.playSoundEffect("harvest");
  }

  async playBeeSound(): Promise<void> {
    await this.playSoundEffect("bee");
  }

  async playWaterSound(): Promise<void> {
    await this.playSoundEffect("water");
  }

  async playUnlockSound(): Promise<void> {
    await this.playSoundEffect("unlock");
  }

  async playAchievementSound(): Promise<void> {
    await this.playSoundEffect("achievement");
  }

  // Ambient music based on game state
  async playForestAmbience(): Promise<void> {
    await this.playBackgroundMusic("forest");
  }

  async playGardenAmbience(): Promise<void> {
    await this.playBackgroundMusic("garden");
  }

  async playNightAmbience(): Promise<void> {
    await this.playBackgroundMusic("night");
  }
}

export const audioService = new AudioService();
