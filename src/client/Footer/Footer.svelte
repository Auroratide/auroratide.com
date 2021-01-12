<script lang="ts">
    import { Container } from '@/client/Container'

    const currentYear = new Date().getUTCFullYear()
</script>

<Container>
    <div class="footer">
        <small class="license">&copy; {currentYear} Timothy Foster, All Rights Reserved</small>
    </div>
</Container>

<style>
    .footer {
        padding: var(--sizing-spacing-xl) 0;
        text-align: center;
    }

    .license {
        font-size: 87.5%;
        font-weight: var(--typography-light);
    }
</style>
