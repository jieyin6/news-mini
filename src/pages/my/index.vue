<template>
    <div>
        <auth />
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import user from '../../lib/user'
import auth from '../../components/common/auth'
import store from '../../store'
export default {
    data () {
        return {
            
        }
    },
    components: {
        auth
    },
    methods: {
        ...mapMutations(['toggleAuth'])
    },
    onLoad() {
        if(!user.isLogin()) return this.toggleAuth()
    }
}
</script>

<style>

</style>
