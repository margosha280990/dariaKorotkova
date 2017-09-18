<template lang="pug">
  .skills-item
    .skills-title {{skillGroup}}
    Skill(
      v-for="skill in skills"
      v-if="checkSkillType(skillGroup) === skill.type"
      :id="skill.id"
      :key="skill.id"
      :title="skill.name",
      :percents="skill.percents"
      @removeSkill="removeSkill(skill.id)"
    )
    .add-skill
      input(type="text" v-model="skillName")
      button(
        type="button"
        @click="addSkill(skillGroup)"
      ) Добавить скилл
      
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  data: () => ({
    skillName: ''
  }),
  props: {
    skillGroup: String,
    skills: Array
  },
  methods: {
    addSkill(skillGroup) {
      this.$emit('addSkill', {
        id: Math.round(Math.random() * 1000000),
        name: this.skillName,
        percents: 0,
        type: this.checkSkillType(skillGroup),
      })
    },
    removeSkill(skillId) {
      this.$emit('removeSkill', skillId)
    },
    checkSkillType(skillGroup) {
      switch (skillGroup) {
        case 'Frontend' : 
          return 1
        case 'Workflow' :
          return 2
        case 'Backend' : 
          return 3
      }
    }
  },
  mounted(){
    console.log('key', this.key);
  },
  components: {
    Skill: require('../skill')
  }
}
</script>
<style src="./style.scss" lang="scss" scoped></style>